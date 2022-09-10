import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/actions';

import s from './form.module.scss';

export default function Form() {
  const dispatch = useDispatch();
  const currentContacts = useSelector(state => state.contacts.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (checkDuplicateName()) {
      return;
    }

    dispatch(addContact({ name, number }));
    reset();
  };

  const checkDuplicateName = () => {
    let isAlredyHasContact = false;
    let dublicatedName = null;
    const normalizeName = name.toLowerCase();

    currentContacts?.map(
      el =>
        el.name.toLowerCase() === normalizeName &&
        ((isAlredyHasContact = true), (dublicatedName = el.name))
    );

    if (isAlredyHasContact) {
      alert(dublicatedName + ' is alredy in your contact');
    }

    return isAlredyHasContact;
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
      return;
    }

    if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></input>
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
