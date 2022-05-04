import Book from "../model/Book";

import { findBooks, addBook } from "../repositories/BookshelfRepository";

export async function retrieveLibraryContents(): Promise<Book[]> {
  return findBooks();
}

export async function addBookToLibrary(book: Book): Promise<void> {
  addBook(book);
}
