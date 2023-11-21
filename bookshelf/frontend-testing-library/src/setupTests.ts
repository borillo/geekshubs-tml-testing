import "@testing-library/jest-dom";

import { server } from "./mocks/server";

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
        message: () => "the values are equal",
      };
    }

    return {
      pass: false,
      message: () =>
        `expected ${received} to equal ${computed} with two decimal precision`,
    };
  },
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
