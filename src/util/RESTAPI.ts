import Logger from "../util/Logger";
import IPagination from "../interface/IPagination";
const logger = Logger(__filename);

const superagent = require('superagent');

class RESTAPI {
    private connected = false;
    private url;
    private key;

    constructor(url, key?) {
        this.url = url;
        this.key = key;
        if(key){
            this.authentication();
        }
    }

    public async authentication(login?, password?){
        logger.info(`Authentication called. username:${login}` )
        try {
            await superagent.get(`${this.url}/api/v2/authenticated`).set({Authorization: this.key}).send();
            this.connected = true;
        } catch (err) {
            let result = await superagent.post(`${this.url}/api/v2/users/login`).send({
                login: login,
                password: password
            });
            this.key = result.body.authorization;
            if(this.key){
                this.connected = true;
            }else{
                logger.error("Fail to login");
                this.connected = false;
            }
        }
        return this.key;
    }

    async create({model, data}) {
        let base_url = `${this.url}/api/v2/${model}?`;
        try {
            let result = await superagent.post(base_url).set({Authorization: this.key}).send(data);
            return result.body;
        } catch (e) {
            throw e;
        }
    }

    async update({model, model_id, data}) {
        let base_url = `${this.url}/api/v2/${model}/${model_id}`;
        try {
            let result = await superagent.patch(base_url).set({Authorization: this.key}).send(data);
            return result.body;
        } catch (e) {
            throw e;
        }
    }

    async delete({model, model_id}) {
        let base_url = `${this.url}/api/v2/${model}/${model_id}`;
        try {
            let result = await superagent.delete(base_url).set({Authorization: this.key}).send();
            return result.body;
        } catch (e) {
            throw e;
        }
    }

    async read(model, query?) {
        if (model instanceof Object && model.constructor === Object) {
            return this._read(model);
        } else if (typeof model === "string") {
            let filter = [];
            if (query && Object.keys(query).length) {
                filter = Object.keys(query).map(el => ({property: el, operator: "=", value: query[el]}));
            }
            return this._read({
                model: model,
                filter: filter
            });
        }
    }

    async _read({model, limit, page, filter, select, sort, populate} : {model:any, limit?, page?, filter?, select?, sort?, populate?}) {
        let body = null;
        let base_url = `${this.url}/api/v2/${model}?`;

        if (process.env.FILTER_MODE === "URL") {
            if (filter) {
                if (!Array.isArray(filter)) {
                    filter = [filter];
                }

                let encodeURIRecursive = function (el) {
                    filter = el.map(el => {
                        if ((Array.isArray(el))) {
                            return encodeURIRecursive(el);
                        } else {
                            if (el.operator === "near") {
                                return el;
                            } else if (Array.isArray(el.value)) {
                                el.value = el.value.map(el => encodeURIComponent(el));
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
            return result.body;
        } catch (e) {
            throw e;
        }
    }

    async readById({model, model_id, select} : {model, model_id, select?, retrying?}) {
        let base_url = `${this.url}/api/v2/${model}/${model_id}?`;

        if (select) {
            base_url = `${base_url}&select=${select}`;
        }

        try {
            let result = await superagent.get(base_url).set({Authorization: this.key}).send();
            return result.body;
        } catch (e) {
            throw e;
        }

    }

    async fetchAllWithPagination<T>({model, limit = 500, filter, populate, select, sort} : {model, limit?, filter?, populate?, select?, sort?}): Promise<IPagination<T>> {
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
            throw e;
        }
        return {rows: ret as Array<T>, total:ret.length, count:ret.length, start:0, limit:-1}; //@TODO Resolver isso de forma mais correta
    }

    async customRequest({method = "GET", v2_route = "", query = {}, data}) {
        let base_url = `${this.url}/api/v2/${v2_route}?`;
        for (let query_name in query) {
            if (query.hasOwnProperty(query_name)) {
                base_url = `${base_url}&${query_name}=${query[query_name]}`;
            }
        }
        try {
            let result = await superagent[method.toLowerCase()](base_url).set({Authorization: this.key}).timeout(999999).send(data);
            return result.body;
        } catch (e) {
            throw e;
        }
    }

}

export default RESTAPI;