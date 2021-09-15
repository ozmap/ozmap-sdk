"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = require("./Base");
const EnumOperator_1 = require("../interface/EnumOperator");
class Client extends Base_1.default {
    constructor() {
        super(...arguments);
        this.endpoint = 'ftth-clients';
    }
    async getById(clientId) {
        return this.byIdHelper(clientId);
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
    async getOneByONUCode(ONUCode) {
        const filter = { property: 'onu.serial_number', value: ONUCode, operator: EnumOperator_1.EnumOperator.EQUAL };
        let paginatedClient = await this.getAllByFilter([filter]);
        if (paginatedClient.count > 1) {
            throw new Error('found more than one client with this id');
        }
        return paginatedClient.rows[0];
    }
    getByIds(ids) {
        return this.byIdsHelper(ids);
    }
    getAllByQuery(readQueryInput) {
        return this.getAllByQueryHelper(readQueryInput);
    }
}
exports.default = Client;
//# sourceMappingURL=Client.js.map