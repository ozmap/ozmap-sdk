"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = require("./Base");
const EnumOperator_1 = require("../interface/EnumOperator");
class Property extends Base_1.default {
    constructor() {
        super(...arguments);
        this.endpoint = 'properties';
    }
    async getById(propertyId) {
        return this.byIdHelper(propertyId);
    }
    async getAll() {
        return this.getAllHelper();
    }
    create(model) {
        return this.createHelper(model);
    }
    delete(id) {
        return this.deleteHelper(id);
    }
    update(model) {
        return this.updateHelper(model);
    }
    getAllByFilter(filter) {
        return this.getAllByFilterHelper(filter);
    }
    getAllByQuery(readQueryInput) {
        return this.getAllByQueryHelper(readQueryInput);
    }
    getByIds(ids) {
        return this.byIdsHelper(ids);
    }
    async getPropertyByClientId(id) {
        const filter = { property: 'client', value: id, operator: EnumOperator_1.EnumOperator.EQUAL };
        let paginatedClients = await this.getAllByFilterHelper([filter]);
        if (paginatedClients.count > 1) {
            throw new Error("found more than one property for this client");
        }
        return paginatedClients.rows[0];
    }
}
exports.default = Property;
//# sourceMappingURL=Property.js.map