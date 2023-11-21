import "@testing-library/jest-dom";

expect.extend({
  toEqualRounded(received: number, computed: number) {
    if (Number(received.toFixed(2)) === computed) {
      return {
        pass: true,
        message: () => "Passed",
      };
    }

    return {
      pass: false,
      message: () =>
        `expected ${received} to equal ${computed} with two decimal precision`,
    };
  },
});
