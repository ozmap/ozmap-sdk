import Base from "./Base";
import IUser from "../interface/model/IUser";
import IPagination from "../interface/IPagination";
import IFilter from "../interface/IFilter";
import { EnumOperator } from "../interface/EnumOperator";
import IProject from "../interface/model/IProject";
import ObjectID from "bson-objectid";
import IModel from "../interface/model/IModel";
import IReadQueryInput from "../interface/IReadQueryInput";

class User extends Base {
  protected endpoint = "users";

  create(model: IUser): Promise<IUser> {
    if (model.password) {
      const crypto = require("crypto");
      model.password = crypto
        .createHash("sha256")
        .update(model.password)
        .digest("hex");
    }
    return this.createHelper<IUser>(model);
  }

  delete(id: IUser | ObjectID): Promise<IUser> {
    return this.deleteHelper<IUser>(id);
  }

  async getAll(): Promise<IPagination<IUser>> {
    return this.getAllHelper<IUser>();
  }

  getAllByFilter(filter: Array<IFilter>): Promise<IPagination<IUser>> {
    return this.getAllByFilterHelper<IUser>(filter);
  }

  getById(id: IUser | ObjectID): Promise<IUser> {
    return this.byIdHelper<IUser>(id);
  }

  getAllByQuery(readQueryInput: IReadQueryInput): Promise<IPagination<IUser>> {
    return this.getAllByQueryHelper<IUser>(readQueryInput);
  }

  async getByEmail(email: string): Promise<IUser> {
    const users = await this.getAllByFilter([
      { property: "email", operator: EnumOperator.EQUAL, value: email },
    ]);
    if (users.rows.length > 1) {
      throw new Error(
        `There is more than one user with the same email ${email}`
      );
    }
    return users.rows[0];
  }

  async getByUsername(userName: string): Promise<IUser> {
    const users = await this.getAllByFilter([
      { property: "username", operator: EnumOperator.EQUAL, value: userName },
    ]);
    if (users.rows.length > 1) {
      throw new Error(
        `There is more than one user with the same userName ${userName}`
      );
    }
    return users.rows[0];
  }

  async addProject(userId: ObjectID, projectId: ObjectID, roleId: ObjectID) {
    await this.update({
      id: userId,
      projects: [
        {
          project: projectId,
          role: roleId,
        },
      ],
    });
  }

  /**
   * Return a list of projects of a given userId
   * @param id Id of the user
   */
  async getAllProjects(id: ObjectID): Promise<Array<IProject>> {
    const user = await this.getById(id);
    const projectIds = [];
    for (const projectRole of user.projects) {
      projectIds.push(projectRole.project);
    }
    return this.ozmapSdk.getProject().getByIds(projectIds);
  }

  update(model: IModel | IUser): Promise<void> {
    if ("password" in model && model.password) {
      const crypto = require("crypto");
      model.password = crypto
        .createHash("sha256")
        .update(model.password)
        .digest("hex");
    }
    return this.updateHelper<IUser>(model);
  }

  getByIds(ids: Array<ObjectID>): Promise<Array<IUser>> {
    return this.byIdsHelper<IUser>(ids);
  }
}

export default User;
