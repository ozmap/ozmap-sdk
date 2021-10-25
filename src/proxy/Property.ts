import Base from "./Base";
import IPagination from "../interface/IPagination";
import IProperty from "../interface/model/IProperty";
import IFilter from "../interface/IFilter";
import ObjectID from "bson-objectid";
import { EnumOperator } from "../interface/EnumOperator";
import IReadQueryInput from "../interface/IReadQueryInput";

class Property extends Base {
  protected endpoint = "properties";

  async getById(propertyId: ObjectID): Promise<IProperty> {
    return this.byIdHelper<IProperty>(propertyId);
  }

  async getAll(): Promise<IPagination<IProperty>> {
    return this.getAllHelper<IProperty>();
  }

  create(model: IProperty): Promise<IProperty> {
    return this.createHelper<IProperty>(model);
  }

  delete(id: ObjectID): Promise<IProperty> {
    return this.deleteHelper<IProperty>(id);
  }

  update(model: IProperty): Promise<void> {
    return this.updateHelper(model);
  }

  getAllByFilter(filter: Array<IFilter>): Promise<IPagination<IProperty>> {
    return this.getAllByFilterHelper<IProperty>(filter);
  }

  getAllByQuery(
    readQueryInput: IReadQueryInput
  ): Promise<IPagination<IProperty>> {
    return this.getAllByQueryHelper<IProperty>(readQueryInput);
  }

  getByIds(ids: Array<ObjectID>): Promise<Array<IProperty>> {
    return this.byIdsHelper<IProperty>(ids);
  }

  async getPropertyByClientId(id: string): Promise<IProperty> {
    const filter: IFilter = {
      property: "client",
      value: id,
      operator: EnumOperator.EQUAL,
    };
    const paginatedClients = await this.getAllByFilterHelper<IProperty>([
      filter,
    ]);
    if (paginatedClients.count > 1) {
      throw new Error("found more than one property for this client");
    }
    return paginatedClients.rows[0];
  }
}

export default Property;
