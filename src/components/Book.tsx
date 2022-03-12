type IBookProps = {
  title: string;
  author: string;
}

function Book({ title, author }: IBookProps): JSX.Element {
  return (
    <div>
      {title}
      {author}
    </div>
  )
}

export default Book;