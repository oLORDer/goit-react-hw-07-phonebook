import { configureStore, combineReducers } from '@reduxjs/toolkit';

import contacts from './reducer';

const reducer = combineReducers({
  contacts: contacts,
});

const store = configureStore({ reducer });

export default store;
