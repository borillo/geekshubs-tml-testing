import React from "react";

class BookshelfPageObject {
  constructor(component: React.ReactNode) {
    cy.mount(component);
  }

  async fillForm(title: string, author: string) {
    cy.get("#form-title").type(title);
    cy.get("#form-author").type(author);
  }

  submitForm() {
    cy.get("button").click();
  }
}

export default BookshelfPageObject;
