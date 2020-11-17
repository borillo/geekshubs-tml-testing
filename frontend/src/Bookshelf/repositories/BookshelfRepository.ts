import Book from "../model/Book";

const books: Book[] = [
  new Book("Lean from the Trenches", "Henrik Kniberg"),
  new Book("Clean Code", "Robert C. Martin"),
  new Book("Understanding the 4 rules of simple design", "Corey Haines"),
];

export async function findBooks(): Promise<Book[]> {
  return Promise.resolve(books);
}

export async function addBook(book: Book): Promise<void> {
  books.push(book);
  return Promise.resolve();
}
