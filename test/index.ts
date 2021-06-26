import Logger from '../src/util/Logger';

const logger = Logger(__filename);

import OZMapSDK from '../src';
import ObjectID from 'bson-objectid';

(async function () {
    logger.info('Iniciando os testes!');
    const ozmap = new OZMapSDK('************');
    await ozmap.authentication('*****', '****************');

    // if (ozmap.isConnected()) {
    //   try {
    //     await ozmap
    //       .getUser()
    //       .update({
    //         id: new ObjectID('60d0f62380067800241eb202'),
    //         password: '12345678',
    //       });
    //   } catch (e) {
    //     console.log(e);
    //   }

    // if (ozmap.isConnected()) {
    //     try {
    //         await ozmap
    //             .getUser().getAll()
    //     } catch (e) {
    //         console.log(e);
    //     }

    if (ozmap.isConnected()) {
        try {
            await ozmap
                .getClient()
                .update({
                    id: new ObjectID('5da76c5111450e000694908c'),
                    onu: {
                        user_PPPoE: '12345678',
                        serial_number: '12345678',
                        mac_address: '12345678'
                    }
                });
        } catch (e) {
            console.log(e);
        }


        // let clonedProject = await ozmap.getProject().clone(new ObjectID("60cf83e7286cb60018458741"));

        // console.log(clonedProject)

        // ozmap.getUser().addProject(
        // 	new ObjectID("60cf534380067800241ea9fd"),
        // 	new ObjectID("40ccee1480067800241ea51e"),
        // 	new ObjectID("4accf8ee0ff2c819a4ffd38e")
        // )

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
