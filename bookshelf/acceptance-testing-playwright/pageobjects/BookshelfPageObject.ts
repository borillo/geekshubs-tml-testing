import { Page } from "@playwright/test";

class BookshelfPageObject {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto("/bookshelf");
  }

  async fillForm(title: string, author: string) {
    await this.page.getByLabel(/title/i).fill(title);
    await this.page.getByLabel(/author/i).fill(author);
  }

  async submitForm() {
    await this.page.getByText(/add/i).click();
  }
}

export default BookshelfPageObject;
