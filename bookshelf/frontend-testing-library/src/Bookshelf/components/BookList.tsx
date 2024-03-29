import { Book } from "../model";
import BookItem from "./BookItem";

interface BookLisProps {
  books: Book[];
}

const BookList = ({ books }: BookLisProps) => (
  <div className="bookshelf-booklist">
    {books.map((book, index) => (
      <BookItem key={index} {...book} />
    ))}
  </div>
);

export default BookList;
