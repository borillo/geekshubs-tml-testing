import { mount } from "@cypress/react";

class BookshelfPageObject {
  constructor(component) {
    mount(component);
  }

  async fillForm(title, author) {
    cy.findByLabelText(/title/i).type(title);
    cy.findByLabelText(/author/i).type(author);
  }

  submitForm() {
    cy.findByText(/add/i).click();
  }
}

export default BookshelfPageObject;
