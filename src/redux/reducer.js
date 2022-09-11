import { createReducer } from '@reduxjs/toolkit';
import action from './actions';

const initialStore = {
  items: [],
  filter: '',
  loading: false,
  error: null,
};

const contacts = createReducer(initialStore, {
  [action.addContact]: (state, { payload }) => {
    state.items.push(payload);
  },
  [action.removeContact]: (state, { payload }) => {
    const result = state.items.filter(item => item.id !== payload);
    return { ...state, items: result };
  },
  [action.setFilter]: (store, { payload }) => {
    store.filter = payload;
  },
  [action.fetchContactsLoading]: (store) => {
    store.loading = true;
    store.error = null;
  },
  [action.fetchContactsSuccess]: (store, {payload}) => {
    store.items = payload;
    store.loading = false;
  },
  [action.fetchContactsError]: (store, {payload}) => {
    store.loading = false;
    store.error = payload;
  }
});

export default contacts;
