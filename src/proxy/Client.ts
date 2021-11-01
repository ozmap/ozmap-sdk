import Base from './Base';
import IPagination from '../interface/IPagination';
import IClient from '../interface/model/IClient';
import IFilter from '../interface/IFilter';
import ObjectID from 'bson-objectid';
import { EnumOperator } from '../interface/EnumOperator';
import IReadQueryInput from '../interface/IReadQueryInput';

class Client extends Base {
  protected endpoint = 'ftth-clients';

  async getById(clientId: ObjectID): Promise<IClient> {
    return this.byIdHelper<IClient>(clientId);
  }

  async getAll(): Promise<IPagination<IClient>> {
    return this.getAllHelper<IClient>();
  }

  create(model: IClient): Promise<IClient> {
    return this.createHelper<IClient>(model);
  }

  delete(id: ObjectID): Promise<IClient> {
    return this.deleteHelper<IClient>(id);
  }

  update(model: IClient): Promise<void> {
    return this.updateHelper(model);
  }

  getAllByFilter(filter: Array<IFilter>): Promise<IPagination<IClient>> {
    return this.getAllByFilterHelper<IClient>(filter);
  }

  async getOneByONUCode(ONUCode: string): Promise<IClient> {
    const filter: IFilter = {
      property: 'onu.serial_number',
      value: ONUCode,
      operator: EnumOperator.EQUAL,
    };
    const paginatedClient = await this.getAllByFilter([filter]);
    if (paginatedClient.count > 1) {
      throw new Error('found more than one client with this id');
    }
    return paginatedClient.rows[0];
  }

  getByIds(ids: Array<ObjectID>): Promise<Array<IClient>> {
    return this.byIdsHelper<IClient>(ids);
  }

  getAllByQuery(readQueryInput: IReadQueryInput): Promise<IPagination<IClient>> {
    return this.getAllByQueryHelper<IClient>(readQueryInput);
  }
}

export default Client;
