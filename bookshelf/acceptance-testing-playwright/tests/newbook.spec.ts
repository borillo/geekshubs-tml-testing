import { test, expect } from "@playwright/test";

import fakeData from "../pageobjects/BookshelfFakeData";
import BookshelfPageObject from "../pageobjects/BookshelfPageObject";

test("add a new book", async ({ page }) => {
  const title = fakeData.generateTitle();
  const author = fakeData.generateAuthor();

  let pageObject = new BookshelfPageObject(page);
  await pageObject.open();
  await pageObject.fillForm(title, author);
  await pageObject.submitForm();

  expect(page.getByText(`${title} (${author})`)).toBeDefined();
});
