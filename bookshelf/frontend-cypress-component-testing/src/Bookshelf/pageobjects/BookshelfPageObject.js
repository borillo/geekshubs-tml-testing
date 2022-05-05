import { mount } from "@cypress/react";

class BookshelfPageObject {
  constructor(component) {
    mount(component);
  }

  async fillForm(title, author) {
    cy.get("#form-title").type(title);
    cy.get("#form-author").type(author);
  }

  submitForm() {
    cy.get("button").click();
  }
}

export default BookshelfPageObject;
