const { configure } = require("approvals");
const {
  verify,
  verifyAsJson,
} = require("approvals/lib/Providers/Jest/JestApprovals");
const { JestReporter } = require("approvals/lib/Providers/Jest/JestReporter");

describe.only("#approvals", () => {
  beforeAll(() => {
    configure({
      reporters: [new JestReporter()],
    });
  });

  it("should be able to use Approvals", () => {
    verify("Test");
  });

  it("should be able to use Approvals with JSON", () => {
    verifyAsJson({ a: 1, b: 2 });
  });
});
