import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

class BookshelfPageObject {
  constructor(component: React.ReactElement) {
    render(component);
  }

  async fillForm(title: string, author: string) {
    const titleEl = screen.getByLabelText(/title/i);
    userEvent.type(titleEl, title);
    await waitFor(() => expect(titleEl).toHaveValue(title));

    const authorEl = screen.getByLabelText(/author/i);
    userEvent.type(authorEl, author);
    await waitFor(() => expect(authorEl).toHaveValue(author));
  }

  submitForm() {
    userEvent.click(screen.getByText(/add/i));
  }
}

export default BookshelfPageObject;
