import OZMapSDK from "../src";

(async function() {
    const ozmap = new OZMapSDK('https://fiberschoolclass.ozmap.com.br:9994');
    await ozmap.authentication('admin', 'admin');
    let data = await ozmap.getProject().getAll();
    //let data = await ozmap.getBox().getAllBoxes();
    //let data = await ozmap.getBox().getBoxById('60c248c1da36980022f150ec');
    console.log(data.rows[0].id);
})();