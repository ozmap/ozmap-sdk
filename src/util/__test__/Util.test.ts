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

describe('Unit tests for the string parsing API', () => {
  const testCase = {
    target:
      'Esta frase, por mais incrível que possa parecer (para algumas pessoas, a.k.a. impressionáveis), serve para testar o método Util.parseString()',
    withoutSpecialChars:
      'Esta frase por mais incrível que possa parecer para algumas pessoas aka impressionáveis serve para testar o método UtilparseString',
    withoutAccentuation:
      'Esta frase, por mais incrivel que possa parecer (para algumas pessoas, a.k.a. impressionaveis), serve para testar o metodo Util.parseString()',
    withoutBoth:
      'Esta frase por mais incrivel que possa parecer para algumas pessoas aka impressionaveis serve para testar o metodo UtilparseString',
  };

  it('Should remove only special characters from string', () => {
    const parsedString = Util.parseString(testCase.target).removeSpecialChars().parsed();

    expect(parsedString).toEqual(testCase.withoutSpecialChars);
  });

  it('Should remove only accentuation from string', () => {
    const parsedString = Util.parseString(testCase.target).removeAccentuation().parsed();

    expect(parsedString).toEqual(testCase.withoutAccentuation);
  });

  it('should remove both special chars and accentuation from string', () => {
    const parsedString = Util.parseString(testCase.target).removeAccentuation().removeSpecialChars().parsed();

    expect(parsedString).toEqual(testCase.withoutBoth);
  });
});
