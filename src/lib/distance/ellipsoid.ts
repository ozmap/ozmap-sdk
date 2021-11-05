import { Constants, parseElementCoords } from './base';
import IGPS from '../../interface/IGPS';

/**
 * Helper function that implements the iterative calculation of the
 * difference in longitude on an auxiliary sphere
 *
 * @private
 * @param   {number} first approximation
 * @param   {number} WGS84 flattening
 * @param   {number} reduced latitude from point of origin
 * @param   {number} reduced latitude from point of destiny
 * @param   {number} maximum error of approximation
 * @param   {number} maximum iterations
 * @returns (Record<string, number>} trigonometric values from notable angles and params from iterative scheme
 */
const _iterativeStep = (
  L: number,
  f: number,
  U1: number,
  U2: number,
  maxError: number,
  iterations: number,
): Record<string, number> => {
  const { sin, cos } = Math;

  // λ = difference in longitude on an auxiliary sphere
  let error = 0.0,
    lambda = L,
    oldLambda = 0.0;
  // σ = angular distance P₁ P₂ on the sphere
  let sigma = 0.0,
    sinSigma = 0.0,
    cosSigma = 0.0;
  // σₘ = angular distance on the sphere from the equator to the midpoint of the line
  let cos2SigmaM = 0.0;
  // α = azimuth of the geodesic at the equator
  let cosSqAlpha = 0.0;

  // beginning of the iterative method
  let iterationsToGo = iterations;

  do {
    sinSigma = Math.sqrt(
      cos(U2) * sin(lambda) * (cos(U2) * sin(lambda)) +
        (cos(U1) * sin(U2) - sin(U1) * cos(U2) * cos(lambda)) * (cos(U1) * sin(U2) - sin(U1) * cos(U2) * cos(lambda)),
    );

    if (sinSigma == 0) {
      // co-incident points
      return {
        distance: 0.0,
        error,
        iterations,
      };
    }

    const sinAlpha = (cos(U1) * cos(U2) * sin(lambda)) / sinSigma;

    cosSigma = sin(U1) * sin(U2) + cos(U1) * cos(U2) * cos(lambda);
    sigma = Math.atan2(sinSigma, cosSigma);
    cosSqAlpha = 1 - sinAlpha * sinAlpha;
    cos2SigmaM = cosSigma - (2 * sin(U1) * sin(U2)) / cosSqAlpha;

    if (isNaN(cos2SigmaM)) cos2SigmaM = 0; // equatorial line: cosSqAlpha=0

    const C = (f / 16) * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));

    oldLambda = lambda;

    lambda =
      L +
      (1 - C) *
        Constants.f *
        sinAlpha *
        (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));

    error = Math.abs(lambda - oldLambda);
  } while (error > maxError && --iterationsToGo > 0);

  return { cosSqAlpha, cosSigma, sinSigma, cos2SigmaM, sigma, error, iterationsToGo };
};

/**
 * Calculates geodetic distance between two points specified by
 * latitude/longitude using Vincenty inverse formula for ellipsoids.
 * Derivation: https://www.ngs.noaa.gov/PUBS_LIB/inverse.pdf
 *
 * @param   {IGPS} elementA: First point in decimal degrees
 * @param   {IGPS} elementB: Second point in decimal degrees
 * @param   {number?} maxError: Maximum error in the iterative process
 * @param   {number?} iterations: Maximum number of iterations in the iterative process
 * @param   {number?} decimalDigits: Number of decimal digits in the result
 * @returns (VincentyResult} Distance in metres between points
 */
const distanceVincenty = (
  elementA: IGPS,
  elementB: IGPS,
  maxError = 1e-12,
  iterations = 100,
  decimalDigits = 3,
): VincentyResult => {
  const parsedElements = parseElementCoords(elementA, elementB);

  const { A: from, B: to } = parsedElements;
  const { a, b, f } = Constants;

  const L = to.lng && from.lng && to.lng - from.lng;

  const U1 = from.lat && Math.atan((1 - f) * Math.tan(from.lat));
  const U2 = to.lat && Math.atan((1 - f) * Math.tan(to.lat));

  if (!(U1 && U2 && L)) {
    return {
      distance: undefined,
      error: undefined,
      iterations: undefined,
    };
  }

  const { cosSqAlpha, cosSigma, sinSigma, cos2SigmaM, sigma, error, iterationsToGo } = _iterativeStep(
    L,
    f,
    U1,
    U2,
    maxError,
    iterations,
  );

  if (iterationsToGo == 0) {
    // formula failed to converge
    return {
      distance: undefined,
      error,
      iterations: iterationsToGo,
    };
  }

  const uSq = (cosSqAlpha * (a * a - b * b)) / (b * b);
  const A = 1 + (uSq / 16384) * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
  const B = (uSq / 1024) * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
  const deltaSigma =
    B *
    sinSigma *
    (cos2SigmaM +
      (B / 4) *
        (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) -
          (B / 6) * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));

  const s = b * A * (sigma - deltaSigma);
  const distance = parseFloat(s.toFixed(decimalDigits)); // round to 1mm precision

  return {
    distance,
    error,
    iterations: iterationsToGo,
  };
};

export { distanceVincenty };
