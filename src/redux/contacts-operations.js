import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'services/apiBooks';

const isDublicate = ({ name, phone }, contacts) => {
  let isAlredyHasContact = false;
  let dublicatedName = null;
  const normalizedName = name.toLowerCase();

  contacts?.map(
    el =>
      el.name.toLowerCase() === normalizedName &&
      ((isAlredyHasContact = true), (dublicatedName = el.name))
  );

  if (isAlredyHasContact) {
    alert(dublicatedName + ' is alredy in your contact');
  }

  return isAlredyHasContact;
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/add',
  async (data, rejectWithValue) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDublicate(data, contacts.items)) {
        return false;
      }
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
        await api.removeContacts(id);
        return id;
    } catch (error) {
        return rejectWithValue(error);
    }
  }
);

// native
// import action from './actions';

// export const fetchContacts = () => {
//   const func = async dispatch => {
//     dispatch(action.fetchContactsLoading());
//     try {
//         const data = await api.getContacts();
//         dispatch(action.fetchContactsSuccess(data))
//     } catch (error){
//         dispatch(action.fetchContactsError(error.message))
//     }
//   };
//   return func;
// };

// export const addContactsApi = (data) => {
//     const func = async(dispatch, getState) => {
//         const {contacts} = getState();
//         if(isDublicate(data, contacts.items)) {return}

//         try {
//             dispatch(action.addContactLoading());
//             const result = await api.addContact(data);
//             dispatch(action.addContactSuccess(result));
//         } catch (error) {
//             dispatch(action.addContactError(error.message));
//         }
//     };

//     return func;
// }

// export const removeContact = (id) => {
//     const func = async(dispatch) => {
//         try {
//             dispatch(action.removeContactLoading());
//             await api.removeContacts(id)
//             dispatch(action.removeContactSuccess(id));
//         } catch (error) {
//             dispatch(action.removeContactError(error.message))
//         }
//     };

//     return func;
// }
