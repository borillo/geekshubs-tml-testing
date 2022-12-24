import { Book } from "../model";

const BookItem = ({ title, author }: Book) => (
  <div className="bookshelf-book">
    {title} ({author})
  </div>
);

export default BookItem;
