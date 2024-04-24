import { describe, test, expect } from "vitest";

import { screen } from "@testing-library/react";

import Bookshelf from "../components/Bookshelf";
import BookshelfPageObject from "../pageobjects/BookshelfPageObject";
import fakeData from "../pageobjects/BookshelfFakeData";

describe("bookshelf", () => {
  test("default book list should be loaded", async () => {
    new BookshelfPageObject(<Bookshelf />);
    expect(await screen.findByText(/clean code/i)).toBeDefined();
  });

  test("a book should be added", async () => {
    const title = fakeData.generateTitle();
    const author = fakeData.generateAuthor();

    const pageobjects = new BookshelfPageObject(<Bookshelf />);
    await pageobjects.fillForm(title, author);
    pageobjects.submitForm();

    expect(await screen.findByText(`${title} (${author})`)).toBeDefined();
  });
});
