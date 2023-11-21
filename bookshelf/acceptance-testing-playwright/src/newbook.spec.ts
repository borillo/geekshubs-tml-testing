import BookshelfPageObject from "../../pageobjects/BookshelfPageObject";
import fakeData from "../../pageobjects/BookshelfFakeData";

describe("bookshelf", () => {
  it("add a new book", () => {
    const title = fakeData.generateTitle();
    const author = fakeData.generateAuthor();

    let pageObject = new BookshelfPageObject(cy);
    pageObject.open();
    pageObject.fillForm(title, author);
    pageObject.submitForm();

    cy.contains(`${title} (${author})`);
  });
});
