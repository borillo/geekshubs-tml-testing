import { mount } from "@cypress/react";

it("Button", () => {
  mount(<button>Test button</button>);
  cy.get("button").contains("Test button");
});
