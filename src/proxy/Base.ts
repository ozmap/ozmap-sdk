import Logger from "../util/Logger";
const logger = Logger(__filename);

import RESTAPI from "../util/RESTAPI";
import IPagination from "../interface/IPagination";
import IModel from "../interface/model/IModel";
import IFilter from "../interface/IFilter";
import OZMapSDK from "../OZMapSDK";
import {EnumOperator} from "../interface/EnumOperator";
import ObjectID from "bson-objectid";

abstract class Base {
    protected abstract endpoint;
    protected restapiObject :RESTAPI;
    protected ozmapSdk :OZMapSDK;

    constructor(restapi :RESTAPI, ozmapSdk :OZMapSDK) {
        this.restapiObject = restapi;
        this.ozmapSdk = ozmapSdk;
    }
    
    protected get restapi (){
        if(!this.restapiObject.isConnected()){
            logger.error("OZMap is not connected yet. Call .authentication() with correct params, before use it");
            throw new Error("OZMap is not connected yet. Call .authentication() before use it");
        }
        return this.restapiObject;
    }

    abstract create(model :IModel) :Promise<IModel>;
    abstract update(model :IModel) :Promise<IModel>;
    abstract getByIds(ids :Array<ObjectID>) :Promise<Array<IModel>>;
    abstract delete(id :ObjectID) :Promise<IModel>;
    abstract getById(id :ObjectID) :Promise<IModel>;
    abstract getAll() :Promise<IPagination<IModel>>;
    abstract getAllByFilter(filter :Array<IFilter>) :Promise<IPagination<IModel>>;
    
    //Helpers to get data from proxy.
    protected async updateHelper<T>(model :IModel) :Promise<T> {
        if(!model.id){
            throw new Error("ID is required for updates")
        }
        return this.restapi.update(this.endpoint, model.id, model);
    }
    
    protected byIdHelper<T>(id :ObjectID) {
        return this.restapi.readById<T>({model: this.endpoint, model_id: id});
    }
    
    protected async byIdsHelper<T>(ids :Array<ObjectID>) :Promise<Array<T>>{
        let paginatedModels = await this.restapi.read<T>({
            model: this.endpoint,
            filter: [{property: "id", operator: EnumOperator.IN, value: ids}]
        })
        return paginatedModels.rows;
    }
}

export default Base;

