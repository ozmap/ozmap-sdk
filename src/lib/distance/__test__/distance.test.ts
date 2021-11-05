import { ConversionError } from '../../../exceptions/ConversionError';
import { deg2rad, parseElementCoords } from '../base';

describe('Unit tests for the distance library', () => {
  it('tries to convert degrees to radians with invalid values', () => {
    const testCases = ['thisIsNotANumber', null, NaN];

    testCases.forEach((value) => {
      try {
        deg2rad(value as number | undefined);
      } catch (error) {
        expect(error).toBeInstanceOf(ConversionError);
        expect((error as ConversionError).message).toBe('A valid angle in degrees must be provided!');
      }
    });
  });

  it('tries to parse valid GPS elements', () => {
    const validElements = [
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

    const expected = {
      A: {
        lat: deg2rad(35.6544),
        lng: deg2rad(139.74477),
      },
      B: {
        lat: deg2rad(21.4225),
        lng: deg2rad(39.8261),
      },
    };

    for (const [elmA, elmB] of validElements) {
      const parsedElements = parseElementCoords(elmA, elmB);
      expect(parsedElements).toStrictEqual(expected);
    }
  });

  it('tries to parse incomplete or mixed GPS elements', () => {
    const testCases = [
      {
        elements: [
          { lat: 35.6544 }, // elementA
          { latitude: 21.4225, lng: 39.8261 }, // elementB
        ],
        expected: {
          A: { lat: 0.622286672823066 },
          B: { lat: 0.3738931590084851, lng: 0.6950965732285134 },
        },
      },
      {
        elements: [{ lat: 35.6544, lng: '139.74477' }, { lng: 39.8261 }],
        expected: {
          A: { lat: 0.622286672823066, lng: 2.439006348942195 },
          B: { lng: 0.6950965732285134 },
        },
      },
      {
        elements: [{}, { latitude: 21.4225, lng: '39.8261' }],
        expected: {
          A: {},
          B: { lat: 0.3738931590084851, lng: 0.6950965732285134 },
        },
      },
      {
        elements: [{ lat: '35.6544' }, { longitude: 39.8261 }],
        expected: {
          A: { lat: 0.622286672823066 },
          B: { lng: 0.6950965732285134 },
        },
      },
    ];

    for (const testCase of testCases) {
      const {
        elements: [elmA, elmB],
        expected,
      } = testCase;
      const parsedElements = parseElementCoords(elmA, elmB);
      expect(parsedElements).toStrictEqual(expected);
    }
  });
});
