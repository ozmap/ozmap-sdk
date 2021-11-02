import { Constants, parseElementCoords } from './base';
import IGPS from '../../interface/IGPS';

/**
 * Calculates geodetic distance between two points specified by
 * latitude/longitude using Vincenty inverse formula for ellipsoids.
 * Derivation: https://en.wikipedia.org/wiki/Vincenty%27s_formulae
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

  const sinU1 = Math.sin(U1);
  const cosU1 = Math.cos(U1);
  const sinU2 = Math.sin(U2);
  const cosU2 = Math.cos(U2);

  // beginning of the iterative method
  let lambda = L,
    oldLambda = 0.0,
    C = 0.0,
    cosSqAlpha = 0.0,
    cos2SigmaM = 0.0,
    cosLambda = 0.0,
    cosSigma = 0.0,
    sinAlpha = 0.0,
    sinLambda = 0.0,
    sinSigma = 0.0,
    sigma = 0.0,
    error = 0.0;

  do {
    sinLambda = Math.sin(lambda);
    cosLambda = Math.cos(lambda);

    sinSigma = Math.sqrt(
      cosU2 * sinLambda * (cosU2 * sinLambda) +
        (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda) * (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda),
    );

    if (sinSigma == 0) {
      // co-incident points
      return {
        distance: 0.0,
        error,
        iterations,
      };
    }

    sinAlpha = (cosU1 * cosU2 * sinLambda) / sinSigma;

    cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
    sigma = Math.atan2(sinSigma, cosSigma);
    cosSqAlpha = 1 - sinAlpha * sinAlpha;
    cos2SigmaM = cosSigma - (2 * sinU1 * sinU2) / cosSqAlpha;

    if (isNaN(cos2SigmaM)) cos2SigmaM = 0; // equatorial line: cosSqAlpha=0 (§6)

    C = (f / 16) * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));

    oldLambda = lambda;

    lambda =
      L +
      (1 - C) *
        Constants.f *
        sinAlpha *
        (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));

    error = Math.abs(lambda - oldLambda);
  } while (error > maxError && --iterations > 0);

  if (iterations == 0) {
    // formula failed to converge
    return {
      distance: undefined,
      error,
      iterations,
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
    iterations,
  };
};

export { distanceVincenty };
