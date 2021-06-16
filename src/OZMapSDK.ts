import Box from "./manager/Box";
import Logger from "./util/Logger";
import RESTAPI from "./util/RESTAPI";
const logger = Logger('App');

class OZMapSDK {
    private restapi:RESTAPI;
    private box:Box;

    constructor(url, key?) {
        this.restapi = new RESTAPI(url, key);
        this.box = new Box(this.restapi);
    }

    async authentication(login?, password?){
        return this.restapi.authentication(login,password);
    }

    getBox() :Box{
        return this.box;
    }

}

export default OZMapSDK;
