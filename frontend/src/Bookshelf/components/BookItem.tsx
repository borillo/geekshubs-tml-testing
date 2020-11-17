import React from "react";
import Book from "../model/Book";

const BookItem = ({ title, author }: Book) => (
  <div>
    {title} ({author})
  </div>
);

export default BookItem;
