interface BookItemProps {
  title: string;
  author: string;
}

const BookItem = ({ title, author }: BookItemProps) => (
  <div className="bookshelf-book">
    {title} ({author})
  </div>
);

export default BookItem;
