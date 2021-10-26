import IGPS from "../interface/GPS";
import { ConversionError } from "../exceptions/ConversionError";

enum SupportedCoords {
  LAT = "lat",
  LATITUDE = "latitude",
  LNG = "lng",
  LONGITUDE = "longitude",
}

class Util {
  static PIOVER180 = 0.017453292519943295; // Math.PI / 180

  static deg2rad(deg: number | undefined, optimized = true): number {
    // Conversion of an angular value from degrees to radians

    if (deg !== undefined) {
      return optimized ? deg * Util.PIOVER180 : deg * (Math.PI / 180);
    }

    throw new ConversionError("A valid angle in degrees must be provided!");
  }

  private static _getCoord = (
    elm: IGPS,
    coordName: SupportedCoords
  ): number | undefined => {
    // Helper function that extracts the coordinate component
    // i.e., lat or lng, and then converts it into a numerical value.

    if (coordName in elm) {
      const coord = elm[coordName];

      return typeof coord === "string" ? parseFloat(coord) : coord;
    }

    return undefined;
  };

  private static _parseElementCoords(elementA: IGPS, elementB: IGPS) {
    // Helper function that parses the incoming GPS elements in an
    // object with the latitudes and longitude converted to radians.

    const lat = (elm: IGPS): number | undefined =>
      Util._getCoord(elm, SupportedCoords.LAT) ||
      Util._getCoord(elm, SupportedCoords.LATITUDE);

    const lng = (elm: IGPS): number | undefined =>
      Util._getCoord(elm, SupportedCoords.LNG) ||
      Util._getCoord(elm, SupportedCoords.LONGITUDE);

    return {
      A: {
        ...(lat(elementA) !== undefined && {
          lat: Util.deg2rad(lat(elementA)),
        }),
        ...(lng(elementA) !== undefined && {
          lng: Util.deg2rad(lng(elementA)),
        }),
      },
      B: {
        ...(lat(elementB) !== undefined && {
          lat: Util.deg2rad(lat(elementB)),
        }),
        ...(lng(elementB) !== undefined && {
          lng: Util.deg2rad(lng(elementB)),
        }),
      },
    };
  }

  static elementDistance(elementA: IGPS, elementB: IGPS): number | undefined {
    // Evaluates the distance (in km) between two points on the Earth's
    // surface, assuming the Earth as a sphere with radius R ~= 6378 km.
    // Based on the following derivations:
    // 1. https://en.wikipedia.org/wiki/Great-circle_distance
    // 2. https://drive.google.com/file/d/1WC-CucdSHqBbIDlqdAbUZtaFDWde3aEl/view?usp=sharing

    const parsedElements = Util._parseElementCoords(elementA, elementB);

    const { A, B } = parsedElements;

    const diffLat = B.lat && A.lat && B.lat - A.lat;
    const diffLng = B.lng && A.lng && B.lng - A.lng;

    if (diffLat && diffLng && A.lat && B.lat) {
      const { asin, cos, sqrt } = Math;

      const a =
        0.5 -
        cos(diffLat / 2) / 2 +
        (cos(A.lat) * cos(B.lat) * (1 - cos(diffLng))) / 2;

      return 12756 * asin(sqrt(a)); // 2*R = 12756 km; R = 6378 km
    }
  }
}

export default Util;
