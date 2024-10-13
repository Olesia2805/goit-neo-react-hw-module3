import Section from './components/Section/Section';
import Container from './components/Container/Container';
// import ContactForm from './components/ContactForm/ContactForm';
// import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import contactDB from './contactsDB.json';
import { useState } from 'react';
import appCss from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(contactDB);

  const deleteContact = contactID => {
    setContacts(prevContact => {
      return prevContact.filter(contact => contact.id !== contactID);
    });
  };

  return (
    <Container>
      <Section>
        <h1 className={appCss.header}>Phonebook</h1>
      </Section>
      {/* <Section className="form">
        <ContactForm />
      </Section>
      <Section className="search">
        <SearchBox />
      </Section> */}
      <Section>
        <ContactList contactData={contacts} onDelete={deleteContact} />
      </Section>
    </Container>
  );
};

export default App;
