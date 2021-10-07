import IGPS from "../interface/GPS";

class Util {
  static deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }

  static elementDistanceLatLng(elementA: IGPS, elementB: IGPS) {
    const dLat = this.deg2rad(elementB.lat - elementA.lat);
    const dLon = this.deg2rad(elementB.lng - elementA.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(elementA.lat)) *
        Math.cos(this.deg2rad(elementB.lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return 6378.137 * c; // Distance in km
  }

  static elementDistance(elementA: any, elementB: any) {
    const R = 6378.137;
    const dLat = Util.deg2rad(
      parseFloat(elementB["latitude"]) - parseFloat(elementA["latitude"])
    );
    const dLon = Util.deg2rad(
      parseFloat(elementB["longitude"]) - parseFloat(elementA["longitude"])
    );
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(Util.deg2rad(parseFloat(elementA["latitude"]))) *
        Math.cos(Util.deg2rad(parseFloat(elementB["latitude"]))) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c * 1000; // Distance in m
  }
}

export default Util;
