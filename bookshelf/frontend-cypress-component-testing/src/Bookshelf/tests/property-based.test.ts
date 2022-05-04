import * as fc from "fast-check";

const computeSqrt = (value: number): number => {
  return Math.sqrt(value);
};

describe("one assert per value", () => {
  test("square root", async () => {
    expect(computeSqrt(0)).toEqualRounded(0);
    expect(computeSqrt(1)).toEqualRounded(1);
    expect(computeSqrt(2)).toEqualRounded(1.41);
    expect(computeSqrt(3)).toEqualRounded(1.73);
  });
});

describe("parametrized tests", () => {
  const values = [0, 1, 1.41, 1.73];

  Object.entries(values).forEach(([key, value]) => {
    test(`square root of ${key} should equal ${value}`, async () => {
      expect(computeSqrt(Number(key))).toEqualRounded(value);
    });
  });
});

describe("property based tests", () => {
  test("square root ^2 of a value should equal that value", async () => {
    fc.assert(
      fc.property(fc.nat(), (value) => {
        const sqrtValue = computeSqrt(value);
        expect(Math.round(sqrtValue ** 2)).toEqualRounded(value);
      })
    );
  });
});
