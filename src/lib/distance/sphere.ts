import { Constants, parseElementCoords } from './base';
import IGPS from '../../interface/IGPS';

/**
 * Calculates geodetic distance between two points specified by
 * latitude/longitude using the Earth's spherical formulae.
 * Based on the following derivations:
 * 1. https://en.wikipedia.org/wiki/Great-circle_distance
 * 2. https://drive.google.com/file/d/1WC-CucdSHqBbIDlqdAbUZtaFDWde3aEl/view?usp=sharing
 *
 * @param   {IGPS} elementA: First point in decimal degrees
 * @param   {IGPS} elementB: Second point in decimal degrees
 * @param   {number?} decimalDigits: Number of decimal digits in the result
 * @returns {number | undefined} Distance in metres between points
 */
const distanceSphere = (elementA: IGPS, elementB: IGPS, decimalDigits = 3): number | undefined => {
  const parsedElements = parseElementCoords(elementA, elementB);

  const { A, B } = parsedElements;

  const diffLat = B.lat && A.lat && B.lat - A.lat;
  const diffLng = B.lng && A.lng && B.lng - A.lng;

  if (diffLat && diffLng && A.lat && B.lat) {
    const { asin, cos, sqrt } = Math;

    const a = 0.5 - cos(diffLat / 2) / 2 + (cos(A.lat) * cos(B.lat) * (1 - cos(diffLng))) / 2;
    const d = 2 * Constants.R * asin(sqrt(a));

    return parseFloat((d * 1e3).toFixed(decimalDigits));
  }
};

export { distanceSphere };
