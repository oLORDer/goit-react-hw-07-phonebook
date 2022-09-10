import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';

import { removeContact } from 'redux/actions';

import s from 'components/Form/form.module.scss';

export default function ContactList() {
  const dispatch = useDispatch();
  const currentContacts = useSelector(state => state.contacts.items);
  const filterWord = useSelector(state => state.contacts.filter);
  const filteredContacts = currentContacts?.filter(el =>
    el.name.toLowerCase().includes(filterWord.toLowerCase())
  );

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {filteredContacts?.map(({ id, name, number }) => {
          return (
            <li key={nanoid()} id={id} className={s.item}>
              <div>{`${name}: ${number}`}</div>
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
    </div>
  );
}
