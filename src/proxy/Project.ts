import BaseOld from './BaseOld';
import Pagination from '../interface/Pagination';
import IProject from '../interface/model/IProject';
import IFilter from '../interface/IFilter';
import ObjectID from 'bson-objectid';
import IReadQueryInput from '../interface/IReadQueryInput';

class Project extends BaseOld {
  protected endpoint = 'projects';

  async getById(projectId: ObjectID): Promise<IProject> {
    return this.byIdHelper<IProject>(projectId);
  }

  async getAll(): Promise<Pagination<IProject>> {
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

  async getAllByFilter(filter: Array<IFilter>): Promise<Pagination<IProject>> {
    return this.getAllByFilterHelper<IProject>(filter);
  }

  async getByIds(ids: Array<ObjectID>): Promise<Array<IProject>> {
    return this.byIdsHelper<IProject>(ids);
  }

  getAllByQuery(readQueryInput: IReadQueryInput): Promise<Pagination<IProject>> {
    return this.getAllByQueryHelper<IProject>(readQueryInput);
  }

  async clone(id: ObjectID): Promise<ObjectID> {
    const clone = await this.restapi.customRequest('POST', `${this.endpoint}/${id}/clone`);
    const { body } = clone;

    return new ObjectID(body._id as string);
  }
}

export default Project;
