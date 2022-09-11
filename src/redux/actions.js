import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', data => {
  return {
    payload: {
      ...data,
      id: nanoid(),
    },
  };
});
const removeContact = createAction('contacts/remove');
const setFilter = createAction('filter/set');

const fetchContactsLoading = createAction('contacts/fetch/loading')
const fetchContactsSuccess = createAction('contacts/fetch/success')
const fetchContactsError = createAction('contacts/fetch/error')

const addContactLoading = createAction('contacts/add/loading')
const addContactSuccess = createAction('contacts/add/success')
const addContactError = createAction('contacts/add/error')

const actions = {
  removeContact,
  setFilter,
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  addContactLoading,
  addContactSuccess,
  addContactError,
}

export default actions;