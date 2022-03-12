import React, { useEffect } from 'react';
import Library from '../components/Library';
import { useSelector, useDispatch } from 'react-redux';
import { selectBooks } from '../selectors/book';
import { IFetchBooks } from '../actions/books';

function App() {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAction: IFetchBooks = {
      type: 'books/fetch'
    }

    dispatch(fetchAction);
  }, []);

  return (
    <Library books={books} />
  );
}

export default App;
