describe("bookshelf", () => {
  it("add a new book", () => {
    cy.visit("/bookshelf");
    cy.get("#form-title");
  });
});
