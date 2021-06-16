const path = require("path");
const fs = require("fs");

class Util {
    static deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

    static elementDistanceLatLng(elementA, elementB) {
        let dLat = this.deg2rad(elementB.lat - elementA.lat);
        let dLon = this.deg2rad(elementB.lng - elementA.lng);
        let a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(elementA.lat)) * Math.cos(this.deg2rad(elementB.lat)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return 6378.137 * c; // Distance in km
    }
    static elementDistance(elementA, elementB) {
        let R = 6378.137;
        let dLat = Util.deg2rad(parseFloat(elementB[ "latitude" ]) - parseFloat(elementA[ "latitude" ]));
        let dLon = Util.deg2rad(parseFloat(elementB[ "longitude" ]) - parseFloat(elementA[ "longitude" ]));
        let a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(Util.deg2rad(parseFloat(elementA[ "latitude" ]))) * Math.cos(Util.deg2rad(parseFloat(elementB[ "latitude" ]))) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c * 1000; // Distance in m
    }


}
export default Util;