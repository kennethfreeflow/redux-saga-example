import IAppState from "../types/appState";

export function selectBooks(state: IAppState): IAppState['books'] {
  return state.books;
}