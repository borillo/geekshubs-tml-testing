import { useEffect, useState } from "react";

import {
  retrieveLibraryContents,
  addBookToLibrary,
} from "../services/BookshelfService";

import Book from "../model/Book";

import BookList from "./BookList";
import NewBookForm from "./NewBookForm";

export const BookshelfComponent = ({
  books,
  addBook,
}: {
  books: Book[];
  addBook: (book: Book) => void;
}) => (
  <div className="bookshelf">
    <h1>Bookshelf contents:</h1>

    <BookList books={books} />
    <NewBookForm onNewBook={addBook} />
  </div>
);

const Bookshelf = () => {
  const [books, setBooks] = useState([] as Book[]);

  useEffect(() => {
    retrieveLibraryContents().then((books) => setBooks(books));
  }, [books]);

  async function addBook(book: Book) {
    addBookToLibrary(book).then(() => setBooks([...books, book]));
  }

  return <BookshelfComponent books={books} addBook={addBook} />;
};

export default Bookshelf;
