"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = require("./Base");
class Box extends Base_1.default {
    constructor() {
        super(...arguments);
        this.endpoint = 'boxes';
    }
    async getById(boxId) {
        return this.byIdHelper(boxId);
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
    getByIds(ids) {
        return this.byIdsHelper(ids);
    }
}
exports.default = Box;
//# sourceMappingURL=Box.js.map