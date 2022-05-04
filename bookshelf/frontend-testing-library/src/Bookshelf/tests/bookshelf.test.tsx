import { screen } from "@testing-library/react";

import Bookshelf from "../components/Bookshelf";
import BookshelfPageObject from "../pageobjects/BookshelfPageObject";
import fakeData from "../pageobjects/BookshelfFakeData";

describe("bookshelf", () => {
  test("a book should be added", async () => {
    const title = fakeData.generateTitle();
    const author = fakeData.generateAuthor();

    const pageobjects = new BookshelfPageObject(<Bookshelf />);
    await pageobjects.fillForm(title, author);
    pageobjects.submitForm();

    expect(await screen.findByText(`${title} (${author})`)).toBeInTheDocument();
  });
});
