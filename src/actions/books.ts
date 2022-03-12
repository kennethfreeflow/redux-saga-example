import IBook from "../types/book";

const fetchBooks = 'books/fetch' as const;
const fetchBooksSuccess = 'books/fetch/success' as const;

const actionTypes = {
  fetchBooks,
  fetchBooksSuccess
};

export interface IFetchBooks {
  type: 'books/fetch';
}

export interface IFetchBooksSuccess {
  type: 'books/fetch/success';
  payload: IBook[];
}

export default actionTypes;