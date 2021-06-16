import Logger from "./util/Logger";
const logger = Logger(__filename);

import Box from "./manager/Box";
import RESTAPI from "./util/RESTAPI";
import Project from "./manager/Project";

class OZMapSDK {
    private restapi:RESTAPI;
    private box:Box;
    private project: Project;

    constructor(url, key?) {
        logger.debug("OZMapSDK created")
        this.restapi = new RESTAPI(url, key);
        this.box = new Box(this.restapi);
        this.project = new Project(this.restapi);
    }

    async authentication(login?, password?){
        return this.restapi.authentication(login,password);
    }

    getBox() :Box{
        return this.box;
    }

    getProject() :Project{
        return this.project;
    }

}

export default OZMapSDK;
