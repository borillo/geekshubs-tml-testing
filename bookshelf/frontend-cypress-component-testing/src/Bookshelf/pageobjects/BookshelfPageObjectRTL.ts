import React from "react";

class BookshelfPageObject {
  constructor(component: React.ReactNode) {
    cy.mount(component);
  }

  async fillForm(title: string, author: string) {
    cy.findByLabelText(/title/i).type(title);
    cy.findByLabelText(/author/i).type(author);
  }

  submitForm() {
    cy.findByText(/add/i).click();
  }
}

export default BookshelfPageObject;
