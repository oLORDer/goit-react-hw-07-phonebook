import { configureStore, combineReducers } from '@reduxjs/toolkit';

// import contacts from './reducer';
import contactsSlice from './contacts-slice';

const reducer = combineReducers({
  contacts: contactsSlice,
});

const store = configureStore({ reducer });

export default store;
