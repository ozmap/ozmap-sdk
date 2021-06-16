import Logger from "../util/Logger";
import RESTAPI from "../util/RESTAPI";
const logger = Logger('Base');

abstract class Base {
    protected abstract modelName;
    protected restapi:RESTAPI;

    constructor( restapi: RESTAPI) {
        this.restapi = restapi;
    }

}

export default Base;

