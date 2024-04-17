import BaseOld from './BaseOld';
import IPagination from '../interface/IPagination';
import INetworkConnector from '../interface/model/INetworkConnector';
import IFilter from '../interface/IFilter';
import ObjectID from 'bson-objectid';
import IReadQueryInput from '../interface/IReadQueryInput';

class NetworkConnector extends BaseOld {
  protected endpoint = 'network-connectors';

  async getById(connectorId: ObjectID): Promise<INetworkConnector> {
    return this.byIdHelper<INetworkConnector>(connectorId);
  }

  async getAll(): Promise<IPagination<INetworkConnector>> {
    return this.getAllHelper<INetworkConnector>();
  }

  create(model: INetworkConnector): Promise<INetworkConnector> {
    return this.createHelper<INetworkConnector>(model);
  }

  delete(id: ObjectID): Promise<INetworkConnector> {
    return this.deleteHelper<INetworkConnector>(id);
  }

  update(model: INetworkConnector): Promise<void> {
    return this.updateHelper(model);
  }

  getAllByFilter(filter: Array<IFilter>): Promise<IPagination<INetworkConnector>> {
    return this.getAllByFilterHelper<INetworkConnector>(filter);
  }

  getByIds(ids: Array<ObjectID>): Promise<Array<INetworkConnector>> {
    return this.byIdsHelper<INetworkConnector>(ids);
  }

  getAllByQuery(readQueryInput: IReadQueryInput): Promise<IPagination<INetworkConnector>> {
    return this.getAllByQueryHelper<INetworkConnector>(readQueryInput);
  }
}

export default NetworkConnector;
