import React from 'react';
import s from './App.module.css';

import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactsList from './Components/ContactsList';
import Container from './Components/Container';

function App() {
  return (
    <div className={s.App}>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </Container>
    </div>
  );
}

export default App;
