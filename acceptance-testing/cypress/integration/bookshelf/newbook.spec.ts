import BookshelfPageObject from "../../pageobjects/BookshelfPageObject";
import fakeData from "../../pageobjects/BookshelfFakeData";

describe("bookshelf", () => {
  let pageObject;

  beforeEach(() => {
    pageObject = new BookshelfPageObject(cy);
  });

  it("add a new book", () => {
    const title = fakeData.generateTitle();
    const author = fakeData.generateAuthor();

    pageObject.open();
    pageObject.fillForm(title, author);
    pageObject.submitForm();

    cy.contains(`${title} (${author})`);
  });
});
