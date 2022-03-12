import { IAction } from "../actions/books";
import { initialState } from "../state/app";
import IAppState from "../types/appState";

export default function rootReducer(state: IAppState = initialState, action: IAction): IAppState {
  switch(action.type) {
    case 'books/fetch/success': 
      return {
        ...state,
        books: action.payload,
      }
    default:
      return state;
  }
}