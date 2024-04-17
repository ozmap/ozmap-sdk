import BaseOld from './BaseOld';
import IPagination from '../interface/IPagination';
import ICable from '../interface/model/ICable';
import IFilter from '../interface/IFilter';
import ObjectID from 'bson-objectid';
import IReadQueryInput from '../interface/IReadQueryInput';

class Cable extends BaseOld {
  protected endpoint = 'cables';

  async getById(connectorId: ObjectID): Promise<ICable> {
    return this.byIdHelper<ICable>(connectorId);
  }

  async getAll(): Promise<IPagination<ICable>> {
    return this.getAllHelper<ICable>();
  }

  create(model: ICable): Promise<ICable> {
    return this.createHelper<ICable>(model);
  }

  delete(id: ObjectID): Promise<ICable> {
    return this.deleteHelper<ICable>(id);
  }

  update(model: ICable): Promise<void> {
    return this.updateHelper(model);
  }

  getAllByFilter(filter: Array<IFilter>): Promise<IPagination<ICable>> {
    return this.getAllByFilterHelper<ICable>(filter);
  }

  getByIds(ids: Array<ObjectID>): Promise<Array<ICable>> {
    return this.byIdsHelper<ICable>(ids);
  }

  getAllByQuery(readQueryInput: IReadQueryInput): Promise<IPagination<ICable>> {
    return this.getAllByQueryHelper<ICable>(readQueryInput);
  }
}

export default Cable;
