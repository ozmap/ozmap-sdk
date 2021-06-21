"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../src/util/Logger");
const logger = Logger_1.default(__filename);
const src_1 = require("../src");
const bson_objectid_1 = require("bson-objectid");
(async function () {
    logger.info("Iniciando os testes!");
    const ozmap = new src_1.default('https://fiberschoolclass.ozmap.com.br:9994');
    await ozmap.authentication('admin', 'admin');
    if (ozmap.isConnected()) {
        /**
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
        } catch (e) {
            console.log(e);
        }
        **/
        let clonedProject = await ozmap.getProject().clone(new bson_objectid_1.default("60cf83e7286cb60018458741"));
        console.log(clonedProject);
        ozmap.getUser().addProject(new bson_objectid_1.default("60cf534380067800241ea9fd"), new bson_objectid_1.default("40ccee1480067800241ea51e"), new bson_objectid_1.default("4accf8ee0ff2c819a4ffd38e"));
        /**
        const user = await ozmap.getUser().getByUsername("1raupp");
        console.log(user);
        
        const projectByUsername = await ozmap.getUser().getAllProjects(user.id)
        console.log("PROJECTS BY USERNAME: ",user, projectByUsername)
        
        const userToFindByUsername = await ozmap.getUser().getByUsername('admin')
        console.log("GET USER BY USERNAME: ", userToFindByUsername)
        
        const userToFindByEmail = await ozmap.getUser().getByEmail("contato@devoz.com.br")
        console.log("GET USER BY EMAIL: ", userToFindByEmail)
         **/
        //const userToFindByUsername = await ozmap.getUser().getByUsername('1raupp')
        //let allprojects = await ozmap.getProject().getAll()//getUser().getAllProjects(userToFindByUsername.id);
        //console.log("GET USER BY USERNAME: ", allprojects)
    }
})();
//# sourceMappingURL=index.js.map