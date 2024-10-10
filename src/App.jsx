import Section from './components/Section/Section';
import Container from './components/Container/Container';
// import ContactForm from './components/ContactForm/ContactForm';
// import SearchBox from './components/SearchBox/SearchBox';
// import ContactList from './components/ContactList/ContactList';
// import { useState, useEffect } from 'react';
import appCss from './App.module.css';

const App = () => {
  return (
    <Container>
      <Section className="header">
        <h1 className={appCss.header}>Phonebook</h1>
      </Section>
      {/* <Section className="form">
        <ContactForm />
      </Section>
      <Section className="search">
        <SearchBox />
      </Section>
      <Section className="list">
        <ContactList />
      </Section> */}
    </Container>
  );
};

export default App;
