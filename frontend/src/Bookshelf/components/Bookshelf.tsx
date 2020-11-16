import React, { useEffect, useState } from "react";
import { retrieveLibraryContents } from "../services/BookshelfService";
import Book from "../model/Book";
import BookshelfItem from "./BookshelfItem";

const BookShelf = () => {
  const [books, setBooks] = useState([] as Book[]);

  useEffect(() => {
    retrieveLibraryContents().then((books) => setBooks(books));
  });

  return (
    <div>
      <h1>Bookshelf contents:</h1>
      {books.map((book) => (
        <BookshelfItem {...book} />
      ))}
    </div>
  );
};

export default BookShelf;
