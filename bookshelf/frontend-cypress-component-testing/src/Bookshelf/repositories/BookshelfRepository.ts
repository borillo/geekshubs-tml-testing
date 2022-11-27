import { Book } from "../model";

const books = [
  { title: "Lean from the Trenches", author: "Henrik Kniberg" },
  { title: "Clean Code", author: "Robert C. Martin" },
  {
    title: "Understanding the 4 rules of simple design",
    author: "Corey Haines",
  },
];

export async function findBooks() {
  return Promise.resolve(books);
}

export async function addBook(book: Book) {
  books.push(book);
  return Promise.resolve();
}
