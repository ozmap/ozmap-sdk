import RESTAPI from "../util/RESTAPI";
import IPagination from "../interface/IPagination";
import IModel from "../interface/model/IModel";
import IFilter from "../interface/IFilter";

abstract class Base {
    protected abstract endpoint;
    protected restapi :RESTAPI;

    constructor(restapi :RESTAPI) {
        this.restapi = restapi;
    }

    abstract create(model :IModel) :Promise<IModel>;
    abstract update(model :IModel) :Promise<IModel>;
    
    protected async updateHelper<T>(model :IModel) :Promise<T> {
        if(!model.id){
            throw new Error("ID is required for updates")
        }
        return this.restapi.update(this.endpoint, model.id, model);
    }
    
    abstract delete(id :string) :Promise<IModel>;
    abstract getById(id :string) :Promise<IModel>;
    abstract getAll() :Promise<IPagination<IModel>>;
    abstract getAllByFilter(filter :Array<IFilter>) :Promise<IPagination<IModel>>;
}

export default Base;

