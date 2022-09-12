import { createReducer } from '@reduxjs/toolkit';
import action from './actions';

const initialStore = {
  items: [],
  filter: '',
  loading: false,
  error: null,
};


const contacts = createReducer(initialStore, {
  [action.addContactLoading]: (store) => {
    store.loading = true;
    store.error = null;
  },
  [action.addContactSuccess]: (store, {payload}) => {
    store.items.push(payload);
    store.loading = false;
  },
  [action.addContactError]: (store, {payload}) => {
    store.loading = false;
    store.error = payload;
  },
  [action.removeContactLoading]: (store) => {
    store.loading = true;
    store.error = null;
  },
  [action.removeContactSuccess]: (store, {payload}) => {
    store.loading = false;
    store.items = store.items.filter( item => item.id !== payload);
  },
  [action.removeContactError]: (store, {payload}) => {
    store.loading = false;
    store.error = payload;
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
