import { cleanup, screen } from "@testing-library/react";

import { BookshelfComponent } from "../components/Bookshelf";
import BookshelfPageObject from "../pageobjects/BookshelfPageObject";
import fakeData from "../pageobjects/BookshelfFakeData";

afterEach(cleanup);

describe("bookshelf", () => {
  test("the author should be shown along with the title", () => {
    const title = fakeData.generateTitle();
    const author = fakeData.generateAuthor();

    const pageObject = new BookshelfPageObject(
      <BookshelfComponent books={[{ title, author }]} addBook={jest.fn()} />
    );

    expect(screen.getByText(`${title} (${author})`)).toBeInTheDocument();
  });

  test("a book should be added", () => {
    const title = fakeData.generateTitle();
    const author = fakeData.generateAuthor();

    const addBookMock = jest.fn();

    const pageObject = new BookshelfPageObject(
      <BookshelfComponent books={[]} addBook={addBookMock} />
    );
    pageObject.fillForm(title, author);
    pageObject.submitForm();

    expect(addBookMock).toHaveBeenCalledTimes(1);
    expect(addBookMock).toHaveBeenCalledWith({ title, author });
  });
});
