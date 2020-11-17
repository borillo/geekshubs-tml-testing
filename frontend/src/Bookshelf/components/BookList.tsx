import React from "react";
import Book from "../model/Book";
import BookItem from "./BookItem";

interface BookLisProps {
  books: Book[];
}

const BookList = ({ books }: BookLisProps) => (
  <div>
    {books.map((book, index) => (
      <BookItem key={index} {...book} />
    ))}
  </div>
);

export default BookList;
