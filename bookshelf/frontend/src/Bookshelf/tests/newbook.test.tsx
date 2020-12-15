import * as React from "react";
import { cleanup, screen } from "@testing-library/react";

import Bookshelf from "../components/Bookshelf";
import BookshelfPageObject from "../pageobjects/BookshelfPageObject";
import fakeData from "../pageobjects/BookshelfFaeData";

afterEach(cleanup);

describe("bookshelf", () => {
  test("add a new book", async () => {
    const title = fakeData.generateTitle();
    const author = fakeData.generateAuthor();

    let pageObject = new BookshelfPageObject(<Bookshelf />);
    pageObject.fillForm(title, author);
    pageObject.submitForm();

    expect(await screen.findByText(`${title} (${author})`)).toBeInTheDocument();
  });
});
