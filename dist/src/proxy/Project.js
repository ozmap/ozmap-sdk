"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = require("./Base");
const bson_objectid_1 = require("bson-objectid");
class Project extends Base_1.default {
    constructor() {
        super(...arguments);
        this.endpoint = 'projects';
    }
    async getById(projectId) {
        return this.byIdHelper(projectId);
    }
    async getAll() {
        return this.getAllHelper();
    }
    async create(model) {
        return this.createHelper(model);
    }
    async delete(id) {
        return this.deleteHelper(id);
    }
    async update(model) {
        return this.updateHelper(model);
    }
    async getAllByFilter(filter) {
        return this.getAllByFilterHelper(filter);
    }
    async getByIds(ids) {
        return this.byIdsHelper(ids);
    }
    getAllByQuery(readQueryInput) {
        return this.getAllByQueryHelper(readQueryInput);
    }
    async clone(id) {
        let clone = await this.restapi.customRequest('POST', `${this.endpoint}/${id}/clone`);
        return new bson_objectid_1.default(clone._id);
    }
}
exports.default = Project;
//# sourceMappingURL=Project.js.map