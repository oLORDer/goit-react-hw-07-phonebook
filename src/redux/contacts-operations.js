import * as api from 'services/apiBooks';
import {
  fetchContactsError,
  fetchContactsLoading,
  fetchContactsSuccess,
} from './actions';

export const fetchContacts = () => {
  const func = async dispatch => {
    dispatch(fetchContactsLoading());
    try {
        const data = await api.getContacts();
        dispatch(fetchContactsSuccess(data))
    } catch (error){
        dispatch(fetchContactsError(error.message))
    }
    // api.getContacts().then(data =>
    //   dispatch(fetchContactsSuccess(data))
    //     .catch(error => dispatch(fetchContactsError(error.message)))
    //     .finally(dispatch(fetchContactsLoading()))
    // );
  };
  return func;
};

export const addContactsApi = () => {
    const func = async(dispatch) => {

    }
}