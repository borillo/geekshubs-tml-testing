import { Book } from "../model";
import { findBooks, addBook } from "../repositories/BookshelfRepository";

export async function retrieveLibraryContents() {
  return findBooks();
}

export async function addBookToLibrary(book: ok) {
  addBook(book);
}
