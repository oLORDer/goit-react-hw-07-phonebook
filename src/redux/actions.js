import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

// export const addContact = createAction('contacts/add', data => {
//   return {
//     payload: {
//       ...data,
//       id: nanoid(),
//     },
//   };
// });
export const removeContact = createAction('contacts/remove');
export const setFilter = createAction('filter/set');

export const fetchContactsLoading = createAction('contacts/fetch/loading')
export const fetchContactsSuccess = createAction('contacts/fetch/success')
export const fetchContactsError = createAction('contacts/fetch/error')

export const addContactLoading = createAction('contacts/add/loading')
export const addContactSuccess = createAction('contacts/add/success')
export const addContactError = createAction('contacts/add/error')