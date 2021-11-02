import { ConversionError } from '../../exceptions/ConversionError';
import IGPS from '../../interface/IGPS';

enum SupportedCoords {
  LAT = 'lat',
  LATITUDE = 'latitude',
  LNG = 'lng',
  LONGITUDE = 'longitude',
}

enum DistanceAlgorithms {
  SPHERE = 'sphere',
  ELLIPSOID = 'ellipsoid',
}

enum Constants {
  // WGS-84 ellipsoid parameters
  a = 6378137,
  b = 6356752.314245,
  f = 1 / 298.257223563,
  // Math.PI / 180
  PIOVER180 = 0.01745329251994329,
  // Earth's radius in km
  R = 6378.0,
}

/**
 * Conversion of an angular value from degrees to radians.
 *
 * @param		{number | undefined} deg: Angle in decimal degrees
 * @param		{boolean?} optimized: Flag that, if true, uses the pre-evaluated PI/180
 * @returns {number} Angle in decimal radians
 */
const deg2rad = (deg: number | undefined, optimized = true): number => {
  if (deg !== undefined) {
    return optimized ? deg * Constants.PIOVER180 : deg * (Math.PI / 180);
  }

  throw new ConversionError('A valid angle in degrees must be provided!');
};

/**
 * Helper function that extracts the coordinate component
 * i.e., lat or lng, and then converts it into a numerical value.
 *
 * @param		{IGPS} elementA: Element containig latitude and longitude
 * @param		{SupportedCoords} coordName: Name of the coordinate
 * @returns {number | undefined} The coordinate's numerical value
 */
const getCoord = (elm: IGPS, coordName: SupportedCoords): number | undefined => {
  if (coordName in elm) {
    const coord = elm[coordName];

    return typeof coord === 'string' ? parseFloat(coord) : coord;
  }

  return undefined;
};

/**
 * Helper function that parses the incoming GPS elements in an
 * object with the latitudes and longitude converted to radians.
 *
 * @param		{IGPS} elementA: First point in decimal degrees
 * @param		{IGPS} elementB: Second point in decimal degrees
 * @returns {ParsedElements} Object containing both coordinates in decimal radians
 */
const parseElementCoords = (elementA: IGPS, elementB: IGPS): ParsedElements => {
  const lat = (elm: IGPS): number | undefined =>
    getCoord(elm, SupportedCoords.LAT) || getCoord(elm, SupportedCoords.LATITUDE);

  const lng = (elm: IGPS): number | undefined =>
    getCoord(elm, SupportedCoords.LNG) || getCoord(elm, SupportedCoords.LONGITUDE);

  return {
    A: {
      ...(lat(elementA) !== undefined && {
        lat: deg2rad(lat(elementA)),
      }),
      ...(lng(elementA) !== undefined && {
        lng: deg2rad(lng(elementA)),
      }),
    },
    B: {
      ...(lat(elementB) !== undefined && {
        lat: deg2rad(lat(elementB)),
      }),
      ...(lng(elementB) !== undefined && {
        lng: deg2rad(lng(elementB)),
      }),
    },
  };
};

export { Constants, DistanceAlgorithms, getCoord, deg2rad, parseElementCoords };
