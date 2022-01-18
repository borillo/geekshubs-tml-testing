import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const TextPanel = () => {
  const [text, setText] = React.useState("Hola");

  return (
    <div>
      {text}
      <button onClick={() => setText("Adiós")}>Click</button>
    </div>
  );
};

class TextPanelPageObject {
  private browser: React.ReactElement;

  constructor(browser: React.ReactElement) {
    render(browser);

    this.browser = browser;
  }

  async retrieveText(value: string) {
    return screen.findByText(value);
  }
  async pushButton() {
    return userEvent.click(screen.getByText(/click/i));
  }
}

describe("bookshelf", () => {
  let pageObject: TextPanelPageObject;

  beforeEach(() => {
    pageObject = new TextPanelPageObject(<TextPanel />);
  });

  test("add a new book", async () => {
    expect(await pageObject.retrieveText("Hola")).toBeDefined();

    await pageObject.pushButton();

    expect(await pageObject.retrieveText("Adiós")).toBeDefined();
  });
});

/*import * as React from "react";
import { cleanup, screen } from "@testing-library/react";

import Bookshelf from "../components/Bookshelf";
import BookshelfPageObject from "../pageobjects/BookshelfPageObject";
import fakeData from "../pageobjects/BookshelfFakeData";

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
});*/
