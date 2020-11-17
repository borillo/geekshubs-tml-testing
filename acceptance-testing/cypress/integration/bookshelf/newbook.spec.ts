import * as faker from "faker";

import BookshelfPageObject from "../../pageobjects/BookshelfPageObject";

describe("bookshelf", () => {
  let pageObject;

  beforeEach(() => {
    pageObject = new BookshelfPageObject(cy);
  });

  it("add a new book", () => {
    const title = faker.lorem.sentence();
    const author = `${faker.name.firstName()} ${faker.name.lastName()}`;

    pageObject.open();
    pageObject.fillForm(title, author);
    pageObject.submitForm();

    cy.contains(`${title} (${author})`);
  });
});
