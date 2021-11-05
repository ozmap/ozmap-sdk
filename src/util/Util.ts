import IGPS from '../interface/IGPS';
import { distanceSphere, distanceVincenty, DistanceAlgorithms } from '../lib';

class Util {
  private static SPECIAL_CHARS_REGEX = /[-[\]{}()*+?.,\\^$|#\s]/g;
  private static ACCENTUATION_REGEX = /[\u0300-\u036f]/g;

  static elementDistance(
    elementA: IGPS,
    elementB: IGPS,
    algorithm: DistanceAlgorithms = DistanceAlgorithms.SPHERE,
  ): number | undefined {
    const callable = {
      [DistanceAlgorithms.SPHERE]: (elmA: IGPS, elmB: IGPS) => distanceSphere(elmA, elmB),
      [DistanceAlgorithms.ELLIPSOID]: (elmA: IGPS, elmB: IGPS) => {
        // Just extracting the distance. Other params are for debugging
        const { distance } = distanceVincenty(elmA, elmB);

        return distance;
      },
    };

    return callable[algorithm](elementA, elementB);
  }

  public static parseString(value: string): StringParsingAPI {
    // Split phrase into individual words
    let words = value.split(' ');

    // Object implementing function chaining
    const parsingApi = {
      // Filters out the special characters in the words
      removeSpecialChars() {
        words = words.map((word) => word.trim().replace(Util.SPECIAL_CHARS_REGEX, ''));
        return parsingApi;
      },

      // Filters out the accentuation in the words
      removeAccentuation() {
        words = words.map((word) => word.trim().normalize('NFD').replace(Util.ACCENTUATION_REGEX, ''));
        return parsingApi;
      },

      // Returns the result of the parsing
      parsed() {
        return words.join(' ');
      },
    };

    return parsingApi;
  }
}

export default Util;
