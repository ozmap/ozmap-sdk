import { ConversionError } from "../../exceptions/ConversionError";
import Util from "../Util";

describe("Unit tests of the utility module", () => {
  it("evaluates the distance with different types of GPS elements", () => {
    const elementTestCases = [
      [
        { lat: 35.6544, longitude: 139.74477 }, // elementA
        { latitude: 21.4225, lng: 39.8261 }, // elementB
      ],
      [
        { lat: 35.6544, lng: "139.74477" },
        { lat: "21.4225", lng: 39.8261 },
      ],
      [
        { lat: 35.6544, longitude: 139.74477 },
        { latitude: 21.4225, lng: "39.8261" },
      ],
      [
        { lat: "35.6544", longitude: "139.74477" },
        { latitude: 21.4225, longitude: 39.8261 },
      ],
    ];

    const expectedDistance = 9343.796804493111;

    elementTestCases.forEach(([elmA, elmB]) => {
      const distance = Util.elementDistance(elmA, elmB);
      expect(distance).toBeLessThanOrEqual(expectedDistance);
    });
  });

  it("tries to evaluate distance with an incomplete GPS element", () => {
    const elementTestCases = [
      [
        { lat: 35.6544 }, // elementA
        { latitude: 21.4225, lng: 39.8261 }, // elementB
      ],
      [{ lat: 35.6544, lng: "139.74477" }, { lng: 39.8261 }],
      [{}, { latitude: 21.4225, lng: "39.8261" }],
      [{ lat: "35.6544" }, { longitude: 39.8261 }],
    ];

    elementTestCases.forEach(([elmA, elmB]) => {
      expect(Util.elementDistance(elmA, elmB)).toBeUndefined();
    });
  });

  it("tries to convert degrees to radians with invalid values", () => {
    const testCases = ["thisIsNotANumber", null, NaN];

    testCases.forEach((value) => {
      try {
        Util.deg2rad(value as number | undefined);
      } catch (error) {
        expect(error).toBeInstanceOf(ConversionError);
        expect((error as ConversionError).message).toBe(
          "A valid angle in degrees must be provided!"
        );
      }
    });
  });
});
