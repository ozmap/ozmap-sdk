import BaseOld from './BaseOld';
import Pagination from '../interface/Pagination';
import IRegion from '../interface/model/IRegion';
import IFilter from '../interface/IFilter';
import ObjectID from 'bson-objectid';
import IReadQueryInput from '../interface/IReadQueryInput';

class Region extends BaseOld {
  protected endpoint = 'regions';

  async getById(boxId: ObjectID): Promise<IRegion> {
    return this.byIdHelper<IRegion>(boxId);
  }

  async getAll(): Promise<Pagination<IRegion>> {
    return this.getAllHelper<IRegion>();
  }

  create(model: IRegion): Promise<IRegion> {
    return this.createHelper<IRegion>(model);
  }

  delete(id: ObjectID): Promise<IRegion> {
    return this.deleteHelper<IRegion>(id);
  }

  update(model: IRegion): Promise<void> {
    return this.updateHelper(model);
  }

  getAllByFilter(filter: Array<IFilter>): Promise<Pagination<IRegion>> {
    return this.getAllByFilterHelper<IRegion>(filter);
  }

  getByIds(ids: Array<ObjectID>): Promise<Array<IRegion>> {
    return this.byIdsHelper<IRegion>(ids);
  }

  getAllByQuery(readQueryInput: IReadQueryInput): Promise<Pagination<IRegion>> {
    return this.getAllByQueryHelper<IRegion>(readQueryInput);
  }
}

export default Region;
