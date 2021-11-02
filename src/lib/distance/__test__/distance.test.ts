import { ConversionError } from '../../../exceptions/ConversionError';
import { deg2rad } from '../base';

describe('Unit tests of the utility module', () => {
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
});
