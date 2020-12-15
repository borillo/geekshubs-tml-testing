import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

class BookshelfPageObject {
  constructor(component: React.ReactElement) {
    render(component);
  }

  fillForm(title: string, author: string) {
    userEvent.type(screen.getByLabelText(/title/i), title);
    userEvent.type(screen.getByLabelText(/author/i), author);
  }

  submitForm() {
    userEvent.click(screen.getByText(/add/i));
  }
}

export default BookshelfPageObject;
