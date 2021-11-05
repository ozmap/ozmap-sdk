import * as jest from 'jest';

// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'test';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
  throw err;
});

const argv = process.argv.slice(2);

// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watchAll');
}

jest.run(argv);

// import Logger from '../src/util/Logger';

// const logger = Logger(__filename);

// import OZMapSDK from '../src/OZMapSDK';

// (async function () {
//   logger.info('Iniciando os testes!');
//   const ozmap = new OZMapSDK('********************');
//   await ozmap.authentication('**********', '****************');

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

// if (ozmap.isConnected()) {
//     try {
//         await ozmap
//             .getClient()
//             .update({
//                 id: new ObjectID('5da76c5111450e000694908c'),
//                 onu: {
//                     user_PPPoE: '12345678 - Atualizado 3006',
//                     serial_number: '123456712345678 - Atualizado 3006',
//                     mac_address: '1234567812345678 - Atualizado 3006'
//                 }
//             });
//     } catch (e) {
//         console.log(e);
//     }

// if (ozmap.isConnected()) {
//     try {
//         const client = await ozmap
//             .getClient().getOneByONUCode("12345678 - Atualizado - Via Node-red")
//         console.log(client)
//     } catch (e) {
//         console.log(e);
//     }

// }
// let clonedProject = await ozmap.getProject().clone(new ObjectID("60cf83e7286cb60018458741"));

// console.log(clonedProject)

// ozmap.getUser().addProject(
// 	new ObjectID("60cf534380067800241ea9fd"),
// 	new ObjectID("40ccee1480067800241ea51e"),
// 	new ObjectID("4accf8ee0ff2c819a4ffd38e")
// )

// if (ozmap.isConnected()) {
//     try {
//         const allProperties = await ozmap
//             .getProperty().getAll()

//         // console.log(allProperties.rows[0].client.id)

//         const singlePropertie = await ozmap.getProperty().getPropertyByClientId("5da62434493d9c00066655fe")

//         const objToUpdate = {
//             id: singlePropertie.rows[0].id.toString(),
//             address:"Atualizado"
//         }

//         console.log(singlePropertie)

//         // await ozmap.getProperty().update(objToUpdate)
//     } catch (e) {
//         console.log(e);
//     }
// }

// if (ozmap.isConnected()) {
//   try {
//     const allClientsData = await ozmap.getProperty().getAllByQuery({ select: 'client', limit: 20 });
//     logger.info(allClientsData);
//   } catch (e) {
//     logger.error(e);
//   }
// }

//  const user = await ozmap.getUser().getByUsername("1raupp");
//  console.log(user);

//  const projectByUsername = await ozmap.getUser().getAllProjects(user.id)
//  console.log("PROJECTS BY USERNAME: ",user, projectByUsername)

//  const userToFindByUsername = await ozmap.getUser().getByUsername('admin')
//  console.log("GET USER BY USERNAME: ", userToFindByUsername)

//  const userToFindByEmail = await ozmap.getUser().getByEmail("contato@devoz.com.br")
//  console.log("GET USER BY EMAIL: ", userToFindByEmail)

// const userToFindByUsername = await ozmap.getUser().getByUsername('1raupp')

// let allprojects = await ozmap.getProject().getAll()//getUser().getAllProjects(userToFindByUsername.id);
// console.log("GET USER BY USERNAME: ", allprojects)
// }
// })();
