import { useEffect, useState } from "react";

import {
  retrieveLibraryContents,
  addBookToLibrary,
} from "../services/BookshelfService";

import BookList from "./BookList";
import NewBookForm from "./NewBookForm";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    retrieveLibraryContents().then((books) => setBooks(books));
  }, [books]);

  async function addBook(book) {
    addBookToLibrary(book).then(() => setBooks([...books, book]));
  }

  return (
    <div className="bookshelf">
      <h1>Bookshelf contents:</h1>

      <BookList books={books} />
      <NewBookForm onNewBook={addBook} />
    </div>
  );
};

export default Bookshelf;
