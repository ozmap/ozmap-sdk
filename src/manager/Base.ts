import RESTAPI from "../util/RESTAPI";
import IPagination from "../interface/IPagination";
import IModel from "../interface/model/IModel";

abstract class Base {
    protected abstract endpoint;
    protected restapi: RESTAPI;

    constructor(restapi: RESTAPI) {
        this.restapi = restapi;
    }

    abstract getById(modelId) :Promise<IModel>;
    abstract getAll(): Promise<IPagination<IModel>>;
}

export default Base;

