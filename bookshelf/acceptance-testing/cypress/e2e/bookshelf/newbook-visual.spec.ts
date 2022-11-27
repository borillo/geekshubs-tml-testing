import BookshelfPageObject from "../../pageobjects/BookshelfPageObject";
import fakeData from "../../pageobjects/BookshelfFakeData";

describe("bookshelf", () => {
  it("add a new book", () => {
    const title = fakeData.generateTitle();
    const author = fakeData.generateAuthor();

    cy.eyesOpen({
      appName: "Bookshelf",
      testName: "Adding a new book",
    });

    let pageObject = new BookshelfPageObject(cy);
    pageObject.open();

    cy.eyesCheckWindow({
      tag: "List and add book page",
      target: "window",
      fully: true,
    });

    pageObject.fillForm(title, author);
    pageObject.submitForm();

    cy.contains(`${title} (${author})`);

    cy.eyesClose();
  });
});
