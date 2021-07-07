import Logger from "../util/Logger";

const logger = Logger(__filename);

import IPagination from "../interface/IPagination";
import {query} from "winston";
import IReadQueryInput from "../interface/IReadQueryInput";
import IModel from "../interface/model/IModel";
import ObjectID from "bson-objectid";

const superagent = require('superagent');

class RESTAPI {
	private connected :boolean = false;
	readonly url :string;
	private key :string;
	
	constructor(url :string, key? :string) {
		this.url = url;
		this.key = key;
		this.connected = false;
		if (key) {
			this.authentication();
		}
	}
	
	public async authentication(login? :string, password? :string) :Promise<string> {
		logger.info(`Authentication called. username:${login}`)
		let failToUseAPIKey = false;
		try {
			await superagent.get(`${this.url}/api/v2/authenticated`).set({Authorization: this.key}).send();
			this.connected = true;
			return this.key;
		} catch (err) {
			logger.warn("Fail to use the API-Key");
			failToUseAPIKey = true;
		}
		
		if (failToUseAPIKey) {
			try {
				let result = await superagent.post(`${this.url}/api/v2/users/login`).send({
					login: login,
					password: password
				});
				this.key = result.body.authorization;
				this.connected = true;
				return this.key;
			} catch (e) {
				logger.info("Fail to login, username and/or password are wrong");
			}
		}
		this.connected = false;
		return null;
	}
	
	async create<T>(model :string, data :IModel) :Promise<T> {
		let base_url = `${this.url}/api/v2/${model}?`;
		try {
			let result = await superagent.post(base_url).set({Authorization: this.key}).send(data);
			return result.body as T;
		} catch (e) {
			logger.error(`Fail to create: Error: ${e.message}, StatusCode: ${e.status}`, {model, data});
			if(e.status === 409){
				throw new Error(`This model already exist on OZMap. Error: ${e.message}, StatusCode: ${e.status}` )
			}
			throw e;
		}
	}
	
	async update<T>(model :string, model_id :ObjectID, data :IModel) :Promise<void> {
		let base_url = `${this.url}/api/v2/${model}/${model_id}`;
		try {
			await superagent.patch(base_url).set({Authorization: this.key}).send(data);
		} catch (e) {
			logger.error(`Fail to update: Id: ${model_id} Error: ${e.message}, StatusCode: ${e.status}`, {model, data});
			if(e.status === 404){
				throw new Error(`This id do not exist on OZMap. Id: ${model_id} Error: ${e.message}, StatusCode: ${e.status}` )
			}
			throw e;
		}
	}
	
	async delete<T>(model :string, model_id :ObjectID) :Promise<T> {
		let base_url = `${this.url}/api/v2/${model}/${model_id}`;
		try {
			let result = await superagent.delete(base_url).set({Authorization: this.key}).send();
			return result.body as T;
		} catch (e) {
			logger.error("Fail to delete: ", {model, model_id});
			throw e;
		}
	}
	
	async read<T extends IModel>(model :IReadQueryInput) :Promise<IPagination<T>> {
		if (model instanceof Object && model.constructor === Object) {
			return this._read(model);
		} else if (typeof model === "string") {
			let filter :any = [];
			if (query && Object.keys(query).length) {
				filter = Object.keys(query).map((el :string) => {
					// @ts-ignore
					return ({property: el, operator: "=", value: query[el]});
				});
			}
			return this._read<T>({
				model: model,
				filter: filter
			});
		}
	}
	
	async _read<T extends IModel>({
		                              model,
		                              limit,
		                              page,
		                              filter,
		                              select,
		                              sort,
		                              populate
	                              } :IReadQueryInput) :Promise<IPagination<T>> {
		let body = null;
		let base_url = `${this.url}/api/v2/${model}?`;
		
		if (filter) {
			if (!Array.isArray(filter)) {
				filter = [filter];
			}
			
			filter = this.encodeURIRecursive(filter);
			filter[0].value = filter[0].value==='null' ? filter[0].value=null : filter[0].value
			base_url = `${base_url}&filter=${JSON.stringify(filter)}`;
		}
		
		if (select) {
			base_url = `${base_url}&select=${select}`;
		}
		
		if (limit != null) {
			base_url = `${base_url}&limit=${limit}`;
		}
		
		if (populate != null) {
			base_url = `${base_url}&populate=${populate}`;
		}
		
		if (page != null) {
			base_url = `${base_url}&page=${page}`;
		}
		if (sort != null) {
			base_url = `${base_url}&sort=${JSON.stringify(sort)}`;
		}
		try {
			let result = await superagent.get(base_url).set({Authorization: this.key}).send(body);
			let ret = result.body as IPagination<T>
			for (let iModel of ret.rows) {
				iModel.id = new ObjectID(iModel.id as unknown as string);
			}
			return ret;
		} catch (e) {
			logger.error("Fail to _read", {model, filter})
			throw e;
		}
	}
	
	encodeURIRecursive(filter :any) {
		filter = filter.map((el :any) => {
			if ((Array.isArray(el))) {
				return this.encodeURIRecursive(el);
			} else {
				if (el.operator === "near") {
					return el;
				} else if (Array.isArray(el.value)) {
					el.value = el.value.map((elOut :any) => {
						return encodeURIComponent(elOut);
					});
					return el;
				} else {
					return {...el, value: encodeURIComponent(el.value)}
				}
			}
		});
		return filter;
	}
	
	async readById<T extends IModel>(model :string, model_id :ObjectID, select? :string) :Promise<T> {
		let base_url = `${this.url}/api/v2/${model}/${model_id}?`;
		
		if (select) {
			base_url = `${base_url}&select=${select}`;
		}
		
		try {
			let result = await superagent.get(base_url).set({Authorization: this.key}).send();
			return result.body as T;
		} catch (e) {
			logger.error("Fail to readById", {model, model_id, select})
			throw e;
		}
		
	}
	
	async fetchAllWithPagination<T extends IModel>({
		                                               model,
		                                               limit = 500,
		                                               filter,
		                                               populate,
		                                               select,
		                                               sort
	                                               } :IReadQueryInput) :Promise<IPagination<T>> {
		let finished = false;
		let ret :Array<T> = [];
		let page = 1;
		try {
			while (!finished) {
				let read_page :Array<T> = (await this.read<T>({
					model,
					limit,
					page,
					filter,
					populate,
					select,
					sort
				})).rows;
				if (read_page.length) {
					ret = ret.concat(read_page);
				} else {
					finished = true;
				}
				page++;
			}
		} catch (e) {
			logger.error("Fail to fetchAllWithPagination", {model, filter, select})
			throw e;
		}
		return {rows: ret, total: ret.length, count: ret.length, start: 0, limit: -1};
	}
	
	async customRequest(method: string = "GET", v2_route: string = "", queryInput?:IReadQueryInput, data?: any) {
		let base_url = `${this.url}/api/v2/${v2_route}`;
		let questionMark = "?"
		for (let query_name in queryInput) {
			if (queryInput.hasOwnProperty(query_name)) {
				// @ts-ignore
				base_url = `${base_url}${questionMark}&${query_name}=${query[query_name]}`;
				questionMark="";
			}
		}
		try {
			let result = await superagent[method.toLowerCase()](base_url).set({Authorization: this.key}).timeout(999999).send(data);
			return result.body;
		} catch (e) {
			logger.error("Fail to customRequest", {method, data, queryInput})
			throw e;
		}
	}
	
	isConnected() {
		return this.connected;
	}
}

export default RESTAPI;
