import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books }) => (
  <div className="bookshelf-booklist">
    {books.map((book, index) => (
      <BookItem key={index} {...book} />
    ))}
  </div>
);

export default BookList;
