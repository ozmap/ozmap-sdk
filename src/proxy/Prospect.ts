import ObjectID from 'bson-objectid';

import Base from './Base';
import IPagination from '../interface/IPagination';
import IProspect from '../interface/model/IProspect';
import IFilter from '../interface/IFilter';
import IReadQueryInput from '../interface/IReadQueryInput';

class Prospect extends Base {
  protected endpoint = 'prospects';

  async getById(prospectId: ObjectID): Promise<IProspect> {
    return this.byIdHelper<IProspect>(prospectId);
  }

  async getAll(): Promise<IPagination<IProspect>> {
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

  getAllByFilter(filter: Array<IFilter>): Promise<IPagination<IProspect>> {
    return this.getAllByFilterHelper<IProspect>(filter);
  }

  getAllByQuery(readQueryInput: IReadQueryInput): Promise<IPagination<IProspect>> {
    return this.getAllByQueryHelper<IProspect>(readQueryInput);
  }

  getByIds(ids: Array<ObjectID>): Promise<Array<IProspect>> {
    return this.byIdsHelper<IProspect>(ids);
  }
}

export default Prospect;
