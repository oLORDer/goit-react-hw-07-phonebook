import { configureStore, combineReducers } from '@reduxjs/toolkit';

import filter from './filter';
import contactsSlice from './contacts-slice';

const reducer = combineReducers({
  contacts: contactsSlice,
  filter,
});

const store = configureStore({ reducer });

export default store;
