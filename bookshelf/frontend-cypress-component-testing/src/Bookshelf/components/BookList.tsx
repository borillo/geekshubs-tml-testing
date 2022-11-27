import { Book } from "../model";
import BookItem from "./BookItem";

interface BookListProps {
  books: Book[];
}

const BookList = ({ books }: BookListProps) => (
  <div className="bookshelf-booklist">
    {books.map((book, index) => (
      <BookItem key={index} {...book} />
    ))}
  </div>
);

export default BookList;
