import IBook from "../types/book";
import Book from "./Book";

type ILibraryProps = {
  books: IBook[];
}

function Library({ books }: ILibraryProps): JSX.Element {
  return (
    <div>
      {books.map((book) => (
        <Book title={book.title} author={book.author} />
      ))}
    </div>
  )
}

export default Library;