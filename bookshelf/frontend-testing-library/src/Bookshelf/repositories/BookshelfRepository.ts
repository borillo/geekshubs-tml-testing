import { Book } from "../model";

export async function findBooks(): Promise<Book[]> {
  const response = await fetch("/books");
  return response.json();
}

export async function addBook(book: Book): Promise<void> {
  return Promise.resolve();
}
