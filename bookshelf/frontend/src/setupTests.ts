// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import expect from "expect";

declare global {
  namespace jest {
    interface Matchers<R> {
      toEqualRounded(value: number): R;
    }
  }
}

expect.extend({
  toEqualRounded(received: number, computed: number) {
    if (Number(received.toFixed(2)) === computed) {
      return {
        pass: true,
      };
    }

    return {
      message: () =>
        `expected ${received} to equal ${computed} with two decimal precision`,
      pass: false,
    };
  },
});
