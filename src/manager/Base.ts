import RESTAPI from "../util/RESTAPI";
import IPagination from "../interface/IPagination";
import IModel from "../interface/model/IModel";

abstract class Base {
    protected abstract endpoint;
    protected restapi: RESTAPI;

    constructor(restapi: RESTAPI) {
        this.restapi = restapi;
    }

    abstract create(model :IModel) :Promise<IModel>;
    abstract update(model :IModel) :Promise<IModel>;
    abstract delete(id :string) :Promise<IModel>;
    abstract getById(id :string) :Promise<IModel>;
    abstract getAll(): Promise<IPagination<IModel>>;
}

export default Base;

