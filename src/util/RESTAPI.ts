import Logger from "../util/Logger";
const logger = Logger(__filename);

import IPagination from "../interface/IPagination";
import {query} from "winston";
import IReadQueryInput from "../interface/IReadQueryInput";

const superagent = require('superagent');

class RESTAPI {
	private connected :boolean = false;
	readonly url :string;
	private key :string;
	
	
	constructor(url, key?) {
		this.url = url;
		this.key = key;
		this.connected=false;
		if (key) {
			this.authentication();
		}
	}
	
	public async authentication(login?, password?) {
		logger.info(`Authentication called. username:${login}`)
		let failToUseAPIKey = false;
		try {
			await superagent.get(`${this.url}/api/v2/authenticated`).set({Authorization: this.key}).send();
			this.connected = true;
			return this.key;
		} catch (err) {
			logger.warn("Fail to use the API-Key");
			failToUseAPIKey=true;
		}
		
		if(failToUseAPIKey) {
			try {
				let result = await superagent.post(`${this.url}/api/v2/users/login`).send({
					login: login,
					password: password
				});
				this.key = result.body.authorization;
				this.connected = true;
				return this.key;
			}catch (e){
				logger.info("Fail to login, username and/or password are wrong");
			}
		}
		this.connected = false;
		return null;
	}
	
	async create({model, data}) {
		let base_url = `${this.url}/api/v2/${model}?`;
		try {
			let result = await superagent.post(base_url).set({Authorization: this.key}).send(data);
			return result.body;
		} catch (e) {
			logger.error("Fail to create: ", {model, data});
			throw e;
		}
	}
	
	async update(model, model_id, data) {
		let base_url = `${this.url}/api/v2/${model}/${model_id}`;
		try {
			let result = await superagent.patch(base_url).set({Authorization: this.key}).send(data);
			return result.body;
		} catch (e) {
			logger.error("Fail to update: ", {model, data});
			throw e;
		}
	}
	
	async delete({model, model_id}) {
		let base_url = `${this.url}/api/v2/${model}/${model_id}`;
		try {
			let result = await superagent.delete(base_url).set({Authorization: this.key}).send();
			return result.body;
		} catch (e) {
			logger.error("Fail to delete: ", {model, model_id});
			throw e;
		}
	}
	
	// async read({model, query}: {model:any, query?:Array<IFilter>} ) {
	async read<T>(model :IReadQueryInput) :Promise<IPagination<T>>{
		
		if (model instanceof Object && model.constructor === Object) {
			return this._read(model);
		} else if (typeof model === "string") {
			let filter = [];
			if (query && Object.keys(query).length) {
				filter = Object.keys(query).map(el => ({property: el, operator: "=", value: query[el]}));
			}
			return this._read<T>({
				model: model,
				filter: filter
			});
		}
	}
	
	async _read<T>({
		            model,
		            limit,
		            page,
		            filter,
		            select,
		            sort,
		            populate
	            } :{ model :any, limit?, page?, filter?, select?, sort?, populate? }) :Promise<IPagination<T>> {
		let body = null;
		let base_url = `${this.url}/api/v2/${model}?`;
		
		if (process.env.FILTER_MODE === "URL") {
			if (filter) {
				if (!Array.isArray(filter)) {
					filter = [filter];
				}
				
				let encodeURIRecursive = function (elIn) {
					filter = elIn.map(el => {
						if ((Array.isArray(el))) {
							return encodeURIRecursive(el);
						} else {
							if (el.operator === "near") {
								return el;
							} else if (Array.isArray(el.value)) {
								el.value = el.value.map(elOut => encodeURIComponent(elOut));
								return el;
							} else {
								return {...el, value: encodeURIComponent(el.value)}
							}
						}
					});
					return filter;
				};
				filter = encodeURIRecursive(filter);
				base_url = `${base_url}&filter=${JSON.stringify(filter)}`;
			}
		} else {
			body = {filter};
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
			return result.body as IPagination<T>;
		} catch (e) {
			logger.error("Fail to _read", {model, filter})
			throw e;
		}
	}
	
	async readById<T>({model, model_id, select} :{ model, model_id, select?, retrying? }) :Promise<T> {
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
	
	async fetchAllWithPagination<T>({
		                                model,
		                                limit = 500,
		                                filter,
		                                populate,
		                                select,
		                                sort
	                                } :{ model, limit?, filter?, populate?, select?, sort? }) :Promise<IPagination<T>> {
		let finished = false;
		let ret = [];
		let page = 1;
		try {
			while (!finished) {
				let {rows: read_page} = await this.read({model, limit, page, filter, populate, select, sort});
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
		return {rows: ret as Array<T>, total: ret.length, count: ret.length, start: 0, limit: -1};
	}
	
	async customRequest({method = "GET", v2_route = "", queryInput = {}, data}) {
		let base_url = `${this.url}/api/v2/${v2_route}?`;
		for (let query_name in queryInput) {
			if (queryInput.hasOwnProperty(query_name)) {
				base_url = `${base_url}&${query_name}=${query[query_name]}`;
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