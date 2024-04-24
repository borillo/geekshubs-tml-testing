import { expect } from "vitest";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

class BookshelfPageObject {
  constructor(component: React.ReactElement) {
    render(component);
  }

  async fillForm(title: string, author: string) {
    userEvent.type(screen.getByLabelText(/title/i), title);
    expect(await screen.findByDisplayValue(title)).toBeDefined();

    userEvent.type(screen.getByLabelText(/author/i), author);
    expect(await screen.findByDisplayValue(author)).toBeDefined();
  }

  submitForm() {
    userEvent.click(screen.getByText(/add/i));
  }
}

export default BookshelfPageObject;
