import React from "react";

const BookItem = ({ title, author }) => (
  <div className="bookshelf-book">
    {title} ({author})
  </div>
);

export default BookItem;
