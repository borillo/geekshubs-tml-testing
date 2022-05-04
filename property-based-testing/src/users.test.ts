import * as fc from "fast-check";

interface User {
  login: string;
  password: string;
}

function passwordComplexity(user: User): number {
  const { password } = user;

  let complexity = 0;

  if (password.length > 8) complexity += 3;
  if (password.match(/[-/&_.;]+/)) complexity += 3;

  return complexity;
}

test("password complexity should medium at least", async () => {
  fc.assert(
    fc.property(
      fc.record({
        login: fc.emailAddress(),
        password: fc.uuidV(4),
      }),
      (user: User) => {
        const complexity = passwordComplexity(user);
        expect(complexity).toBeGreaterThan(5);
      }
    )
  );
});
