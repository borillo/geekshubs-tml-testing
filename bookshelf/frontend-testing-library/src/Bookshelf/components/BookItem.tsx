import React from "react";
import Book from "../model/Book";

const BookItem = ({ title, author }: Book) => (
  <div className="bookshelf-book">
    {title} ({author})
  </div>
);

export default BookItem;
