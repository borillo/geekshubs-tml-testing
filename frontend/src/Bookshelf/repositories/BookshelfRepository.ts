import Book from "../model/Book";

export async function findBooks(): Promise<Book[]> {
  const books: Book[] = [
    new Book("Lean from the Trenches", "Henrik Kniberg"),
    new Book("Clean Code", "Robert C. Martin"),
    new Book("Understanding the 4 rules of simple design", "Corey Haines"),
  ];

  return Promise.resolve(books);
}
