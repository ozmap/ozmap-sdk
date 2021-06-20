import Logger from "../src/util/Logger";
const logger = Logger(__filename);

import OZMapSDK from "../src";
import ObjectID from "bson-objectid";

(async function () {
	logger.info("Iniciando os testes!");
	const ozmap = new OZMapSDK('https://fiberschoolclass.ozmap.com.br:9994');
	await ozmap.authentication('admin', 'admin');
	if(ozmap.isConnected()) {
		try {
			await ozmap.getUser().update({
				id: new ObjectID("60cf534380067800241ea9fd"),
				email: "1raupp@gmail.com",
				name: "-Jose Raupp-",
				observation: "---",
				password: "firefox2",
				phone: "",
				projects: [],
				role: new ObjectID("5accf8ee0ff2c819a4ffd38e"),
				status: 0,
				username: "1raupp",
			});
		}catch (e){
			console.log(e);
		}
		
		
		const user = await ozmap.getUser().getByUsername("1raupp");
		console.log(user);
		/**
		const projectByUsername = await ozmap.getUser().getAllProjects(user.id)
		console.log("PROJECTS BY USERNAME: ",user, projectByUsername)
		
		const userToFindByUsername = await ozmap.getUser().getByUsername('admin')
		console.log("GET USER BY USERNAME: ", userToFindByUsername)
		
		const userToFindByEmail = await ozmap.getUser().getByEmail("contato@devoz.com.br")
		console.log("GET USER BY EMAIL: ", userToFindByEmail)
		 **/
		 
	}
})();