import Logger from "./util/Logger";

const logger = Logger(__filename);

import Box from "./proxy/Box";
import RESTAPI from "./util/RESTAPI";
import Project from "./proxy/Project";
import User from "./proxy/User";

class OZMapSDK {
	private restapi :RESTAPI;
	private box :Box;
	private project :Project;
	private user :User;
	
	constructor(url :string, key? :string) {
		logger.debug("OZMapSDK created")
		this.restapi = new RESTAPI(url, key);
		this.box = new Box(this.restapi, this);
		this.project = new Project(this.restapi, this);
		this.user = new User(this.restapi, this);
	}
	
	async authentication(login? :string, password? :string) {
		return this.restapi.authentication(login, password);
	}
	
	getBox() :Box {
		return this.box;
	}
	
	getProject() :Project {
		return this.project;
	}
	
	getUser() :User {
		return this.user;
	}
	
	isConnected() {
		return this.restapi.isConnected();
	}
}

export default OZMapSDK;
