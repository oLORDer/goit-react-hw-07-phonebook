import { useState, useEffect } from 'react';

import Form from './Form/Form';
import Filter from './Form/formComponents/Filter';
import ContactList from './Form/formComponents/ContactList';

export default function App() {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? initialContacts
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const changeFilter = e => {
  //   setFilter(e.target.value);
  // };

  // const contactsFilter = () => {
  //   const filteredCont = contacts.filter(el =>
  //     el.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  //   return filteredCont;
  // };

  // const formSubmitHandler = data => {
  //   dispatch(data);
  // };

  // const deleteContact = e => {
  //   setContacts(contacts.filter(contacts => contacts.id !== e));
  // };

  return (
    <section>
      <h1>Phonebook</h1>
      <Form />
      <Filter />
      <ContactList />
    </section>
  );
}
