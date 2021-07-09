"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = require("./Base");
const EnumOperator_1 = require("../interface/EnumOperator");
class User extends Base_1.default {
    constructor() {
        super(...arguments);
        this.endpoint = 'users';
    }
    create(model) {
        if (model.password) {
            const crypto = require('crypto');
            model.password = crypto.createHash('sha256').update(model.password).digest('hex');
        }
        return this.createHelper(model);
    }
    delete(id) {
        return this.deleteHelper(id);
    }
    async getAll() {
        return this.getAllHelper();
    }
    getAllByFilter(filter) {
        return this.getAllByFilterHelper(filter);
    }
    getById(id) {
        return this.byIdHelper(id);
    }
    getAllByQuery(readQueryInput) {
        return this.getAllByQueryHelper(readQueryInput);
    }
    async getByEmail(email) {
        let users = await this.getAllByFilter([{ property: 'email', operator: EnumOperator_1.EnumOperator.EQUAL, value: email }]);
        if (users.rows.length > 1) {
            throw new Error(`There is more than one user with the same email ${email}`);
        }
        return users.rows[0];
    }
    async getByUsername(userName) {
        let users = await this.getAllByFilter([{ property: 'username', operator: EnumOperator_1.EnumOperator.EQUAL, value: userName }]);
        if (users.rows.length > 1) {
            throw new Error(`There is more than one user with the same userName ${userName}`);
        }
        return users.rows[0];
    }
    async addProject(userId, projectId, roleId) {
        await this.update({
            id: userId,
            projects: [
                {
                    project: projectId,
                    role: roleId
                }
            ]
        });
    }
    /**
     * Return a list of projects of a given userId
     * @param id Id of the user
     */
    async getAllProjects(id) {
        const user = await this.getById(id);
        let projectIds = [];
        for (let projectRole of user.projects) {
            projectIds.push(projectRole.project);
        }
        return this.ozmapSdk.getProject().getByIds(projectIds);
    }
    update(model) {
        if ('password' in model && model.password) {
            const crypto = require('crypto');
            model.password = crypto.createHash('sha256').update(model.password).digest('hex');
        }
        return this.updateHelper(model);
    }
    getByIds(ids) {
        return this.byIdsHelper(ids);
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map