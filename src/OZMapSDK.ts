import Logger from "./util/Logger";
const logger = Logger(__filename);

import Box from "./proxy/Box";
import RESTAPI from "./util/RESTAPI";
import Project from "./proxy/Project";
import User from "./proxy/User";

class OZMapSDK {
    private restapi:RESTAPI;
    private box :Box;
    private project :Project;
    private user :User;


    constructor(url, key?) {
        logger.debug("OZMapSDK created")
        this.restapi = new RESTAPI(url, key);
        this.box = new Box(this.restapi);
        this.project = new Project(this.restapi);
        this.user = new User(this.restapi);
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

    getUser() :User{
        return this.user;
    }

}

export default OZMapSDK;
