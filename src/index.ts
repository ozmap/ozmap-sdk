import OZMapSDK from "./OZMapSDK";

(async function() {
    const ozmap = new OZMapSDK('https://demo.ozmap.com.br');
    await ozmap.authentication('admin', 'samplePassword');
    let boxes = await ozmap.getBox().getAllBoxes();
    //let boxes = await ozmap.getBox().getBoxById('60c248c1da36980022f150ec');
    console.log(boxes);
})();