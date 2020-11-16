import Book from "../model/Book";

import { findBooks } from "../repositories/BookshelfRepository";

export async function retrieveLibraryContents(): Promise<Book[]> {
  return findBooks();
}
