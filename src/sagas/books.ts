import { takeLatest, put, call, fork } from 'redux-saga/effects';
import actionTypes, { IFetchBooksSuccess } from '../actions/books';
import * as booksApi from '../api/books';
import IBook from '../types/book';

function* watchForFetchBooks(): Generator {
  yield takeLatest(actionTypes.fetchBooks, function* () {
    try {
      const books: IBook[] = yield call(booksApi.fetch);
      const fetchSuccessAction: IFetchBooksSuccess = {
        type: 'books/fetch/success',
        payload: books
      };
      yield put(fetchSuccessAction);
    } catch (error) {
      console.log('Error fetching books');
    }
  })
}

const bookSagas = [
  fork(watchForFetchBooks)
];

export default bookSagas;