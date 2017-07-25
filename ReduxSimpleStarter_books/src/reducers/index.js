import { combineReducers } from 'redux';

import BooksReducer from './books.reducer';
import SelectedBook from './selected-book.reducer';

const rootReducer = combineReducers({
  books: BooksReducer,
  selectedBook: SelectedBook
});

export default rootReducer;
