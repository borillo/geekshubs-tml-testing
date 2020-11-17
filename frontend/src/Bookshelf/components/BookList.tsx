import React from "react";
import Book from "../model/Book";
import BookItem from "./BookItem";

interface BookLisProps {
  books: Book[];
}

const BookList = ({ books }: BookLisProps) => (
  <div>
    {books.map((book) => (
      <BookItem key={book.title} {...book} />
    ))}
  </div>
);

export default BookList;
