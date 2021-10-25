import Base from "./Base";
import IPagination from "../interface/IPagination";
import IProject from "../interface/model/IProject";
import IFilter from "../interface/IFilter";
import ObjectID from "bson-objectid";
import IReadQueryInput from "../interface/IReadQueryInput";

class Project extends Base {
  protected endpoint = "projects";

  async getById(projectId: ObjectID): Promise<IProject> {
    return this.byIdHelper<IProject>(projectId);
  }

  async getAll(): Promise<IPagination<IProject>> {
    return this.getAllHelper<IProject>();
  }

  async create(model: IProject): Promise<IProject> {
    return this.createHelper(model);
  }

  async delete(id: ObjectID): Promise<IProject> {
    return this.deleteHelper(id);
  }

  async update(model: IProject): Promise<void> {
    return this.updateHelper(model);
  }

  async getAllByFilter(filter: Array<IFilter>): Promise<IPagination<IProject>> {
    return this.getAllByFilterHelper<IProject>(filter);
  }

  async getByIds(ids: Array<ObjectID>): Promise<Array<IProject>> {
    return this.byIdsHelper<IProject>(ids);
  }

  getAllByQuery(
    readQueryInput: IReadQueryInput
  ): Promise<IPagination<IProject>> {
    return this.getAllByQueryHelper<IProject>(readQueryInput);
  }

  async clone(id: ObjectID): Promise<ObjectID> {
    const clone = await this.restapi.customRequest(
      "POST",
      `${this.endpoint}/${id}/clone`
    );
    return new ObjectID(clone._id as string);
  }
}

export default Project;
