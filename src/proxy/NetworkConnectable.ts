import BaseOld from './BaseOld';
import Pagination from '../interface/Pagination';
import INetworkConnectable from '../interface/model/INetworkConnectable';
import IFilter from '../interface/IFilter';
import ObjectID from 'bson-objectid';
import IReadQueryInput from '../interface/IReadQueryInput';

class NetworkConnectable extends BaseOld {
  protected endpoint = 'network-connectables';

  async getById(connectorId: ObjectID): Promise<INetworkConnectable> {
    return this.byIdHelper<INetworkConnectable>(connectorId);
  }

  async getAll(): Promise<Pagination<INetworkConnectable>> {
    return this.getAllHelper<INetworkConnectable>();
  }

  create(model: INetworkConnectable): Promise<INetworkConnectable> {
    return this.createHelper<INetworkConnectable>(model);
  }

  delete(id: ObjectID): Promise<INetworkConnectable> {
    return this.deleteHelper<INetworkConnectable>(id);
  }

  update(model: INetworkConnectable): Promise<void> {
    return this.updateHelper(model);
  }

  getAllByFilter(filter: Array<IFilter>): Promise<Pagination<INetworkConnectable>> {
    return this.getAllByFilterHelper<INetworkConnectable>(filter);
  }

  getByIds(ids: Array<ObjectID>): Promise<Array<INetworkConnectable>> {
    return this.byIdsHelper<INetworkConnectable>(ids);
  }

  getAllByQuery(readQueryInput: IReadQueryInput): Promise<Pagination<INetworkConnectable>> {
    return this.getAllByQueryHelper<INetworkConnectable>(readQueryInput);
  }
}

export default NetworkConnectable;
