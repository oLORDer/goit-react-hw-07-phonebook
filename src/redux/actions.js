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
export const removeContact = createAction('contacts/remove');
export const setFilter = createAction('filter/set');

// export const addContact = payload => {
//   return {
//     type: ADD_CONTACT,
//     payload: {
//       ...payload,
//       id: nanoid(),
//     },
//   };
// };

// export const removeContact = payload => {
//   return {
//     type: REMOVE_CONTACT,
//     payload,
//   };
// };

// export const setFilter = payload => {
//   return {
//     type: SET_FILTER,
//     payload,
//   };
// };
