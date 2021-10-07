import Base from "./Base";
import IPagination from "../interface/IPagination";
import INetworkConnectable from "../interface/model/INetworkConnectable";
import IFilter from "../interface/IFilter";
import ObjectID from "bson-objectid";
import IReadQueryInput from "../interface/IReadQueryInput";

class NetworkConnectable extends Base {
  protected endpoint = "network-connectables";

  async getById(connectorId: ObjectID): Promise<INetworkConnectable> {
    return this.byIdHelper<INetworkConnectable>(connectorId);
  }

  async getAll(): Promise<IPagination<INetworkConnectable>> {
    return this.getAllHelper<INetworkConnectable>();
  }

  create(model: INetworkConnectable): Promise<INetworkConnectable> {
    return this.createHelper<INetworkConnectable>(model);
  }

  delete(id: ObjectID): Promise<INetworkConnectable> {
    return this.deleteHelper<INetworkConnectable>(id);
  }

  update(model: INetworkConnectable): Promise<void> {
    return this.updateHelper<INetworkConnectable>(model);
  }

  getAllByFilter(
    filter: Array<IFilter>
  ): Promise<IPagination<INetworkConnectable>> {
    return this.getAllByFilterHelper<INetworkConnectable>(filter);
  }

  getByIds(ids: Array<ObjectID>): Promise<Array<INetworkConnectable>> {
    return this.byIdsHelper<INetworkConnectable>(ids);
  }

  getAllByQuery(
    readQueryInput: IReadQueryInput
  ): Promise<IPagination<INetworkConnectable>> {
    return this.getAllByQueryHelper<INetworkConnectable>(readQueryInput);
  }
}

export default NetworkConnectable;
