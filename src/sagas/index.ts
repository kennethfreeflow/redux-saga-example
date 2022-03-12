import { all } from 'redux-saga/effects';
import bookSagas from './books';

export default function* rootSaga(): Generator {
  yield all([
    ...bookSagas
  ])
}