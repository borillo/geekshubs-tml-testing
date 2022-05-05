import { findBooks, addBook } from "../repositories/BookshelfRepository.js";

export async function retrieveLibraryContents() {
  return findBooks();
}

export async function addBookToLibrary(book) {
  addBook(book);
}
