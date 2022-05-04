export {};

declare global {
  namespace jest {
    interface Matchers<R> {
      toEqualRounded(value: number): CustomMatcherResult;
    }
  }
}
