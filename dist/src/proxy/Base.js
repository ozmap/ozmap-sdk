"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../util/Logger");
const logger = Logger_1.default(__filename);
const EnumOperator_1 = require("../interface/EnumOperator");
const bson_objectid_1 = require("bson-objectid");
class Base {
    constructor(restapi, ozmapSdk) {
        this.restapiObject = restapi;
        this.ozmapSdk = ozmapSdk;
    }
    get restapi() {
        if (!this.restapiObject.isConnected()) {
            logger.error('OZMap is not connected yet. Call .authentication() with correct params, before use it');
            throw new Error('OZMap is not connected yet. Call .authentication() before use it');
        }
        return this.restapiObject;
    }
    //Helpers to get data from proxy.
    async createHelper(model) {
        if (model.id) {
            throw new Error('ID should not be set when creating');
        }
        return this.restapi.create(this.endpoint, model);
    }
    async deleteHelper(id) {
        if (!(id instanceof bson_objectid_1.default)) {
            id = id.id;
        }
        if (id) {
            throw new Error('ID is required for delete');
        }
        return this.restapi.delete(this.endpoint, id);
    }
    async updateHelper(model) {
        if (!model.id) {
            throw new Error('Id is required for updates');
        }
        return this.restapi.update(this.endpoint, model.id, model);
    }
    getAllHelper() {
        return this.restapi.fetchAllWithPagination({ model: this.endpoint });
    }
    getAllByFilterHelper(filter) {
        let readFilter = {
            model: this.endpoint,
            filter: filter
        };
        return this.restapi.read(readFilter);
    }
    getAllByQueryHelper(readQueryInput) {
        readQueryInput.model = this.endpoint;
        return this.restapi.read(readQueryInput);
    }
    byIdHelper(id) {
        if (!(id instanceof bson_objectid_1.default)) {
            if (!id.id) {
                throw new Error('ID is required for gteById');
            }
            id = id.id;
        }
        return this.restapi.readById(this.endpoint, id);
    }
    async byIdsHelper(ids) {
        let paginatedModels = await this.restapi.read({
            model: this.endpoint,
            filter: [{ property: 'id', operator: EnumOperator_1.EnumOperator.IN, value: ids }]
        });
        return paginatedModels.rows;
    }
}
exports.default = Base;
//# sourceMappingURL=Base.js.map