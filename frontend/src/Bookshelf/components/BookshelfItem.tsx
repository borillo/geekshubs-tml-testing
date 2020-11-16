import React from "react";
import Book from "../model/Book";

const BookshelfItem = ({ title, author }: Book) => (
  <div>
    {title} ({author})
  </div>
);

export default BookshelfItem;
