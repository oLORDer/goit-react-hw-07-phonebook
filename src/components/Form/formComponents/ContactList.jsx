import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import action from 'redux/actions';
import { getContactsApi, getStateContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts-operations';

import s from 'components/Form/form.module.scss';

export default function ContactList() {
  const dispatch = useDispatch();
  const currentContacts = useSelector(getContactsApi);
  const {loading, error} = useSelector(getStateContacts);
  const filterWord = useSelector(state => state.contacts.filter);
  const filteredContacts = currentContacts?.filter(el =>
    el.name.toLowerCase().includes(filterWord.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  const deleteContact = id => {
    dispatch(action.removeContact(id));
  };

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {!loading && filteredContacts?.map(({ id, name, phone }) => {
          return (
            <li key={nanoid()} id={id} className={s.item}>
              <div>{`${name}: ${phone}`}</div>
              <button
                className={s.deleteBtn}
                type="button"
                onClick={() => deleteContact(id)}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
      {loading && <p>Loading contacts...</p>}
    </div>
  );
}
