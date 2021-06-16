import OZMapSDK from "../src";

(async function() {
    const ozmap = new OZMapSDK('https://fiberschoolclass.ozmap.com.br:9994','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2R1bGUiOiJhcGkiLCJ1c2VyIjoiNWMzMTczZWU0ZmUzYTcwMDE2ZDA1YmNkIiwiY3JlYXRpb25EYXRlIjoiMjAyMS0wNi0xNlQxNzo1MToyMC40MTlaIiwiaWF0IjoxNjIzODY1ODgwfQ.LNpo5STfHxCbKeaqTnX27d_VtC8M4AhsffayPOMYJ30');
    //await ozmap.authentication('admin', 'admin');
    let data = await ozmap.getProject().getAll();

    //let project  = await ozmap.getProject().getById('60c243a5b5ebed001655a129');
    let users = await ozmap.getUser().getAll();


    //let data = await ozmap.getBox().getAllBoxes();
    //let data = await ozmap.getBox().getBoxById('60c248c1da36980022f150ec');

    console.log(users.rows[0], data);
})();