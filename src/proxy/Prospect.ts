import ObjectID from 'bson-objectid';

import BaseOld from './BaseOld';
import Pagination from '../interface/Pagination';
import IProspect from '../interface/model/IProspect';
import IFilter from '../interface/IFilter';
import IReadQueryInput from '../interface/IReadQueryInput';

class Prospect extends BaseOld {
  protected endpoint = 'prospects';

  async getById(prospectId: ObjectID): Promise<IProspect> {
    return this.byIdHelper<IProspect>(prospectId);
  }

  async getAll(): Promise<Pagination<IProspect>> {
    return this.getAllHelper<IProspect>();
  }

  create(model: IProspect): Promise<IProspect> {
    return this.createHelper<IProspect>(model);
  }

  delete(id: ObjectID): Promise<IProspect> {
    return this.deleteHelper<IProspect>(id);
  }

  update(model: IProspect): Promise<void> {
    return this.updateHelper(model);
  }

  getAllByFilter(filter: Array<IFilter>): Promise<Pagination<IProspect>> {
    return this.getAllByFilterHelper<IProspect>(filter);
  }

  getAllByQuery(readQueryInput: IReadQueryInput): Promise<Pagination<IProspect>> {
    return this.getAllByQueryHelper<IProspect>(readQueryInput);
  }

  getByIds(ids: Array<ObjectID>): Promise<Array<IProspect>> {
    return this.byIdsHelper<IProspect>(ids);
  }
}

export default Prospect;
