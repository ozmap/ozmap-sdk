import IGPS from '../../interface/IGPS';
import { DistanceAlgorithms } from '../../lib';
import Util from '../Util';

describe('Unit tests of the utility module', () => {
  const validElements: [IGPS, IGPS][] = [
    [
      { lat: 35.6544, longitude: 139.74477 }, // elementA
      { latitude: 21.4225, lng: 39.8261 }, // elementB
    ],
    [
      { lat: 35.6544, lng: '139.74477' },
      { lat: '21.4225', lng: 39.8261 },
    ],
    [
      { lat: 35.6544, longitude: 139.74477 },
      { latitude: 21.4225, lng: '39.8261' },
    ],
    [
      { lat: '35.6544', longitude: '139.74477' },
      { latitude: 21.4225, longitude: 39.8261 },
    ],
  ];

  const distanceAlgTestCases: Record<string, Record<string, number>> = {
    [DistanceAlgorithms.ELLIPSOID]: {
      expectedValue: 9496707.64,
    },
    [DistanceAlgorithms.SPHERE]: {
      expectedValue: 9343796.804,
    },
  };

  for (const algorithm of Object.keys(distanceAlgTestCases)) {
    it(`evaluates the distance with different types of GPS elements for the ${algorithm.toUpperCase()} method`, () => {
      const { expectedValue } = distanceAlgTestCases[algorithm];

      for (const [elmA, elmB] of validElements) {
        const distance = Util.elementDistance(elmA, elmB, algorithm as DistanceAlgorithms);
        expect(distance).toBeLessThanOrEqual(expectedValue);
      }
    });

    it(`tries to evaluate distance with an incomplete GPS element for the ${algorithm.toUpperCase()} method`, () => {
      const invalidElements = [
        [
          { lat: 35.6544 }, // elementA
          { latitude: 21.4225, lng: 39.8261 }, // elementB
        ],
        [{ lat: 35.6544, lng: '139.74477' }, { lng: 39.8261 }],
        [{}, { latitude: 21.4225, lng: '39.8261' }],
        [{ lat: '35.6544' }, { longitude: 39.8261 }],
      ];

      for (const [elmA, elmB] of invalidElements) {
        expect(Util.elementDistance(elmA, elmB, algorithm as DistanceAlgorithms)).toBeUndefined();
      }
    });
  }
});
