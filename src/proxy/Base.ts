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
    abstract delete(id :string) :Promise<IModel>;
    abstract getById(id :string) :Promise<IModel>;
    abstract getAll() :Promise<IPagination<IModel>>;
    abstract getAllByFilter(filter :Array<IFilter>) :Promise<IPagination<IModel>>;
}

export default Base;

