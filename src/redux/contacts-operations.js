import * as api from 'services/apiBooks';
import action from './actions';

export const fetchContacts = () => {
  const func = async dispatch => {
    dispatch(action.fetchContactsLoading());
    try {
        const data = await api.getContacts();
        dispatch(action.fetchContactsSuccess(data))
    } catch (error){
        dispatch(action.fetchContactsError(error.message))
    }
  };
  return func;
};

export const addContactsApi = () => {
    const func = async(dispatch) => {

    }
}