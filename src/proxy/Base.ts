import Logger from "../util/Logger";

const logger = Logger(__filename);

import RESTAPI from "../util/RESTAPI";
import IPagination from "../interface/IPagination";
import IModel from "../interface/model/IModel";
import IFilter from "../interface/IFilter";
import OZMapSDK from "../OZMapSDK";
import { EnumOperator } from "../interface/EnumOperator";
import ObjectID from "bson-objectid";
import IReadQueryInput from "../interface/IReadQueryInput";

abstract class Base {
  protected abstract endpoint: string;
  protected restapiObject: RESTAPI;
  protected ozmapSdk: OZMapSDK;

  constructor(restapi: RESTAPI, ozmapSdk: OZMapSDK) {
    this.restapiObject = restapi;
    this.ozmapSdk = ozmapSdk;
  }

  protected get restapi() {
    if (!this.restapiObject.isConnected()) {
      logger.error(
        "OZMap is not connected yet. Call .authentication() with correct params, before use it"
      );
      throw new Error(
        "OZMap is not connected yet. Call .authentication() before use it"
      );
    }
    return this.restapiObject;
  }

  abstract create(model: IModel): Promise<IModel>;

  abstract update(model: IModel): Promise<void>;

  abstract getByIds(ids: Array<ObjectID>): Promise<Array<IModel>>;

  abstract delete(id: ObjectID): Promise<IModel>;

  abstract getById(id: ObjectID): Promise<IModel>;

  abstract getAll(): Promise<IPagination<IModel>>;

  abstract getAllByFilter(filter: Array<IFilter>): Promise<IPagination<IModel>>;

  abstract getAllByQuery(
    readQueryInput: IReadQueryInput
  ): Promise<IPagination<IModel>>;

  //Helpers to get data from proxy.
  protected async createHelper<T>(model: IModel): Promise<T> {
    if (model.id) {
      throw new Error("ID should not be set when creating");
    }
    return this.restapi.create(this.endpoint, model);
  }

  protected async deleteHelper<T>(id: IModel | ObjectID): Promise<T> {
    if (!(id instanceof ObjectID)) {
      id = id.id as ObjectID;
    }

    if (!id) {
      throw new Error("ID is required for delete");
    }
    return this.restapi.delete<T>(this.endpoint, id as ObjectID);
  }

  protected async updateHelper<T extends IModel>(model: IModel): Promise<void> {
    if (!model.id) {
      throw new Error("Id is required for updates");
    }
    return this.restapi.update<T>(this.endpoint, model.id, model);
  }

  protected getAllHelper<T extends IModel>() {
    return this.restapi.fetchAllWithPagination<T>({ model: this.endpoint });
  }

  protected getAllByFilterHelper<T extends IModel>(filter: Array<IFilter>) {
    const readFilter: IReadQueryInput = {
      model: this.endpoint,
      filter: filter,
      limit: -1,
    };
    return this.restapi.read<T>(readFilter);
  }

  protected getAllByQueryHelper<T extends IModel>(
    readQueryInput: IReadQueryInput
  ) {
    readQueryInput.model = this.endpoint;
    return this.restapi.read<T>(readQueryInput);
  }

  protected byIdHelper<T extends IModel>(id: ObjectID | IModel) {
    if (!(id instanceof ObjectID)) {
      if (!id.id) {
        throw new Error("ID is required for gteById");
      }
      id = id.id;
    }
    return this.restapi.readById<T>(this.endpoint, id);
  }

  protected async byIdsHelper<T extends IModel>(
    ids: Array<ObjectID>
  ): Promise<Array<T>> {
    const paginatedModels = await this.restapi.read<T>({
      model: this.endpoint,
      filter: [{ property: "id", operator: EnumOperator.IN, value: ids }],
    });
    return paginatedModels.rows;
  }
}

export default Base;
