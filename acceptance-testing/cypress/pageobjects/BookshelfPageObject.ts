class BookshelfPageObject {
  private browser: Cypress.cy;

  constructor(browser: Cypress.cy) {
    this.browser = browser;
  }

  open() {
    this.browser.visit("/bookshelf");
  }

  fillForm(title, author) {
    this.browser.get("#form-title").type(title);
    this.browser.get("#form-author").type(author);
  }

  submitForm() {
    this.browser.get("button").click();
  }
}

export default BookshelfPageObject;
