import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, setFilter } from './actions';

const initialStore = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contacts = createReducer(initialStore, {
  [addContact]: (state, { payload }) => {
    state.items.push(payload)
    // const newContact = [...state.items, payload];
    // return { ...state, items: newContact };
  },
  [removeContact]: (state, { payload }) => {
    const result = state.items.filter(item => item.id !== payload);
    return { ...state, items: result };
  },
  [setFilter]: (store, { payload }) => {
    store.filter = payload;
    // return { ...store, filter: payload };
  },
});

export default contacts;

// const filter = createReducer('', {
//   [setFilter]: (_, { payload }) => payload,
// });

// const reducer = (store = initialStore, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       const newContact = [...store.contacts, payload];
//       return { ...store, contacts: newContact };
//     case REMOVE_CONTACT:
//       const result = store.contacts.filter(item => item.id !== payload);
//       return { ...store, contacts: result };
//     case SET_FILTER:
//       return { ...store, filter: payload };
//     default:
//       return store;
//   }
// };
