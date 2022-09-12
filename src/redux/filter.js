import { createReducer, createAction } from '@reduxjs/toolkit';

export const setFilter = createAction('filter/set');

const filter = createReducer('', {
  [setFilter]: (store, { payload }) => {
    return store = payload;
  },
});

export default filter;
