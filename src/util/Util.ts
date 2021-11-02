import IGPS from '../interface/IGPS';
import { distanceSphere, distanceVincenty, DistanceAlgorithms } from '../lib';

class Util {
  static elementDistance(
    elementA: IGPS,
    elementB: IGPS,
    algorithm: DistanceAlgorithms = DistanceAlgorithms.SPHERE,
  ): number | undefined {
    const distance = {
      [DistanceAlgorithms.SPHERE]: (elmA: IGPS, elmB: IGPS) => distanceSphere(elmA, elmB),
      [DistanceAlgorithms.ELLIPSOID]: (elmA: IGPS, elmB: IGPS) => {
        // Just extracting the distance. Other params are for debugging
        const { distance } = distanceVincenty(elmA, elmB);

        return distance;
      },
    };

    return distance[algorithm](elementA, elementB);
  }
}

export default Util;
