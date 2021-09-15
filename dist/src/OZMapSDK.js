"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("./util/Logger");
const logger = Logger_1.default(__filename);
const Box_1 = require("./proxy/Box");
const RESTAPI_1 = require("./util/RESTAPI");
const Project_1 = require("./proxy/Project");
const User_1 = require("./proxy/User");
const Client_1 = require("./proxy/Client");
const Cable_1 = require("./proxy/Cable");
const Property_1 = require("./proxy/Property");
const NetworkConnector_1 = require("./proxy/NetworkConnector");
const NetworkConnectable_1 = require("./proxy/NetworkConnectable");
const Region_1 = require("./proxy/Region");
class OZMapSDK {
    constructor(url, key) {
        logger.debug('OZMapSDK created');
        this.restapi = new RESTAPI_1.default(url, key);
        this.box = new Box_1.default(this.restapi, this);
        this.project = new Project_1.default(this.restapi, this);
        this.user = new User_1.default(this.restapi, this);
        this.cable = new Cable_1.default(this.restapi, this);
        this.client = new Client_1.default(this.restapi, this);
        this.property = new Property_1.default(this.restapi, this);
        this.networkConnector = new NetworkConnector_1.default(this.restapi, this);
        this.networkConnectable = new NetworkConnectable_1.default(this.restapi, this);
        this.region = new Region_1.default(this.restapi, this);
    }
    async authentication(login, password) {
        return this.restapi.authentication(login, password);
    }
    getBox() {
        return this.box;
    }
    getProject() {
        return this.project;
    }
    getUser() {
        return this.user;
    }
    getCable() {
        return this.cable;
    }
    getClient() {
        return this.client;
    }
    getProperty() {
        return this.property;
    }
    getNetworkConnector() {
        return this.networkConnector;
    }
    getNetworkConnectable() {
        return this.networkConnectable;
    }
    getRegion() {
        return this.region;
    }
    isConnected() {
        return this.restapi.isConnected();
    }
}
exports.default = OZMapSDK;
//# sourceMappingURL=OZMapSDK.js.map