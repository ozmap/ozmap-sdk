import IGPS from "../interface/GPS";

enum SupportedCoords {
  LAT = "lat",
  LATITUDE = "latitude",
  LNG = "lng",
  LONGITUDE = "longitude",
}

class Util {
  static R = 6378.137; // Earth radius in kilometers

  static deg2rad(deg: number | undefined): number {
    if (deg !== undefined) {
      return deg * (Math.PI / 180);
    }

    throw new Error("A valid angle in degrees must be provided!");
  }

  private static _parseElementCoords(elementA: IGPS, elementB: IGPS) {
    const getCoord = (
      elm: IGPS,
      coordName: SupportedCoords
    ): number | undefined => {
      if (coordName in elm) {
        const coord = elm[coordName];

        return typeof coord === "string" ? parseFloat(coord) : coord;
      }

      return undefined;
    };

    const lat = (elm: IGPS): number | undefined =>
      getCoord(elm, SupportedCoords.LAT) ||
      getCoord(elm, SupportedCoords.LATITUDE);
    const lng = (elm: IGPS): number | undefined =>
      getCoord(elm, SupportedCoords.LNG) ||
      getCoord(elm, SupportedCoords.LONGITUDE);

    const elements = {
      A: {
        ...(lat(elementA) !== undefined && {
          lat: Util.deg2rad(lat(elementA)),
        }),
        ...(lng(elementA) !== undefined && {
          lng: Util.deg2rad(lat(elementA)),
        }),
      },
      B: {
        ...(lat(elementB) !== undefined && {
          lat: Util.deg2rad(lat(elementB)),
        }),
        ...(lng(elementB) !== undefined && {
          lng: Util.deg2rad(lat(elementB)),
        }),
      },
    };

    return elements;
  }

  static elementDistance(
    elementA: IGPS,
    elementB: IGPS,
    distanceInMeters = false
  ): number | void {
    const { atan2, cos, sin, sqrt } = Math;

    const parsedElements = Util._parseElementCoords(elementA, elementB);

    const { A, B } = parsedElements;

    const diffLat = B.lat && A.lat && B.lat - A.lat;
    const diffLng = B.lng && A.lng && B.lng - A.lng;

    if (diffLat && diffLng) {
      const a =
        sin(diffLat / 2) ** 2 +
        cos(Util.deg2rad(A.lat)) *
          cos(Util.deg2rad(B.lat)) *
          sin(diffLng / 2) ** 2;
      const c = 2 * atan2(sqrt(a), sqrt(1 - a));

      const distance = Util.R * c; // distance in kilometers

      return distanceInMeters ? distance * 1000 : distance;
    }

    return;
  }
}

export default Util;
