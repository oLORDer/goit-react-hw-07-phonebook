import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  removeContact,
  setFilter,
  fetchContactsError,
  fetchContactsLoading,
  fetchContactsSuccess,
} from './actions';

const initialStore = {
  items: [],
  filter: '',
  loading: false,
  error: null,
};

const contacts = createReducer(initialStore, {
  [addContact]: (state, { payload }) => {
    state.items.push(payload);
  },
  [removeContact]: (state, { payload }) => {
    const result = state.items.filter(item => item.id !== payload);
    return { ...state, items: result };
  },
  [setFilter]: (store, { payload }) => {
    store.filter = payload;
  },
  [fetchContactsLoading]: (store) => {
    store.loading = true;
    store.error = null;
  },
  [fetchContactsSuccess]: (store, {payload}) => {
    store.items = payload;
    store.loading = false;
  },
  [fetchContactsError]: (store, {payload}) => {
    store.loading = false;
    store.error = payload;
  }
});

export default contacts;
