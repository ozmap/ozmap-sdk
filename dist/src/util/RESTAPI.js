"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../util/Logger");
const logger = Logger_1.default(__filename);
const winston_1 = require("winston");
const bson_objectid_1 = require("bson-objectid");
const superagent = require('superagent');
class RESTAPI {
    constructor(url, key) {
        this.connected = false;
        this.url = url;
        this.key = key;
        this.connected = false;
        if (key) {
            this.authentication();
        }
    }
    async authentication(login, password) {
        logger.info(`Authentication called. username:${login}`);
        let failToUseAPIKey = false;
        try {
            await superagent.get(`${this.url}/api/v2/authenticated`).set({ Authorization: this.key }).send();
            this.connected = true;
            return this.key;
        }
        catch (err) {
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
            }
            catch (e) {
                logger.info("Fail to login, username and/or password are wrong");
            }
        }
        this.connected = false;
        return null;
    }
    async create(model, data) {
        let base_url = `${this.url}/api/v2/${model}?`;
        try {
            let result = await superagent.post(base_url).set({ Authorization: this.key }).send(data);
            return result.body;
        }
        catch (e) {
            logger.error(`Fail to create: Error: ${e.message}, StatusCode: ${e.status}`, { model, data });
            if (e.status === 409) {
                throw new Error(`This model already exist on OZMap. Error: ${e.message}, StatusCode: ${e.status}`);
            }
            throw e;
        }
    }
    async update(model, model_id, data) {
        let base_url = `${this.url}/api/v2/${model}/${model_id}`;
        try {
            await superagent.patch(base_url).set({ Authorization: this.key }).send(data);
        }
        catch (e) {
            logger.error(`Fail to update: Id: ${model_id} Error: ${e.message}, StatusCode: ${e.status}`, { model, data });
            if (e.status === 404) {
                throw new Error(`This id do not exist on OZMap. Id: ${model_id} Error: ${e.message}, StatusCode: ${e.status}`);
            }
            throw e;
        }
    }
    async delete(model, model_id) {
        let base_url = `${this.url}/api/v2/${model}/${model_id}`;
        try {
            let result = await superagent.delete(base_url).set({ Authorization: this.key }).send();
            return result.body;
        }
        catch (e) {
            logger.error("Fail to delete: ", { model, model_id });
            throw e;
        }
    }
    async read(model) {
        if (model instanceof Object && model.constructor === Object) {
            return this._read(model);
        }
        else if (typeof model === "string") {
            let filter = [];
            if (winston_1.query && Object.keys(winston_1.query).length) {
                filter = Object.keys(winston_1.query).map((el) => {
                    // @ts-ignore
                    return ({ property: el, operator: "=", value: winston_1.query[el] });
                });
            }
            return this._read({
                model: model,
                filter: filter
            });
        }
    }
    async _read({ model, limit, page, filter, select, sort, populate }) {
        let body = null;
        let base_url = `${this.url}/api/v2/${model}?`;
        if (filter) {
            if (!Array.isArray(filter)) {
                filter = [filter];
            }
            filter = this.encodeURIRecursive(filter);
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
            let result = await superagent.get(base_url).set({ Authorization: this.key }).send(body);
            let ret = result.body;
            for (let iModel of ret.rows) {
                iModel.id = new bson_objectid_1.default(iModel.id);
            }
            return ret;
        }
        catch (e) {
            logger.error("Fail to _read", { model, filter });
            throw e;
        }
    }
    encodeURIRecursive(filter) {
        filter = filter.map((el) => {
            if ((Array.isArray(el))) {
                return this.encodeURIRecursive(el);
            }
            else {
                if (el.operator === "near") {
                    return el;
                }
                else if (Array.isArray(el.value)) {
                    el.value = el.value.map((elOut) => {
                        return encodeURIComponent(elOut);
                    });
                    return el;
                }
                else {
                    return { ...el, value: encodeURIComponent(el.value) };
                }
            }
        });
        return filter;
    }
    async readById(model, model_id, select) {
        let base_url = `${this.url}/api/v2/${model}/${model_id}?`;
        if (select) {
            base_url = `${base_url}&select=${select}`;
        }
        try {
            let result = await superagent.get(base_url).set({ Authorization: this.key }).send();
            return result.body;
        }
        catch (e) {
            logger.error("Fail to readById", { model, model_id, select });
            throw e;
        }
    }
    async fetchAllWithPagination({ model, limit = 500, filter, populate, select, sort }) {
        let finished = false;
        let ret = [];
        let page = 1;
        try {
            while (!finished) {
                let read_page = (await this.read({
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
                }
                else {
                    finished = true;
                }
                page++;
            }
        }
        catch (e) {
            logger.error("Fail to fetchAllWithPagination", { model, filter, select });
            throw e;
        }
        return { rows: ret, total: ret.length, count: ret.length, start: 0, limit: -1 };
    }
    async customRequest(method = "GET", v2_route = "", queryInput, data) {
        let base_url = `${this.url}/api/v2/${v2_route}`;
        let questionMark = "?";
        for (let query_name in queryInput) {
            if (queryInput.hasOwnProperty(query_name)) {
                // @ts-ignore
                base_url = `${base_url}${questionMark}&${query_name}=${winston_1.query[query_name]}`;
                questionMark = "";
            }
        }
        try {
            let result = await superagent[method.toLowerCase()](base_url).set({ Authorization: this.key }).timeout(999999).send(data);
            return result.body;
        }
        catch (e) {
            logger.error("Fail to customRequest", { method, data, queryInput });
            throw e;
        }
    }
    isConnected() {
        return this.connected;
    }
}
exports.default = RESTAPI;
//# sourceMappingURL=RESTAPI.js.map