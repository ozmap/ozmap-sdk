import Logger from "../src/util/Logger";
const logger = Logger(__filename);

import OZMapSDK from "../src";

(async function () {
	logger.info("Iniciando os testes!");
	const ozmap = new OZMapSDK('https://fiberschoolclass.ozmap.com.br:9994');
	await ozmap.authentication('admin', 'admin');
	if(ozmap.isConnected()) {
		const user = await ozmap.getUser().getByUsername("admin");
		const projectByUsername = await ozmap.getUser().getAllProjects(user.id)
		console.log("PROJECTS BY USERNAME: ",user, projectByUsername)
		
		//const userToFindByUsername = await ozmap.getUser().getByUsername('admin')
		//console.log("GET USER BY USERNAME: ", userToFindByUsername)
		
		//const userToFindByEmail = await ozmap.getUser().getByEmail("contato@devoz.com.br")
		//console.log("GET USER BY EMAIL: ", userToFindByEmail)
	}
})();