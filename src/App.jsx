import Section from './components/Section/Section';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import Notification from './components/Notification/Notification';
import contactDB from './contactsDB.json';
import { useState } from 'react';
import appCss from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(contactDB);
  const [search, setSearch] = useState('');

  const deleteContact = contactID => {
    setContacts(prevContact => {
      return prevContact.filter(contact => contact.id !== contactID);
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Section>
        <h1 className={appCss.header}>Phonebook</h1>
      </Section>
      <Section className="form">
        <ContactForm />
      </Section>
      <Section className="searchInput">
        <SearchBox value={search} onSearch={setSearch} />
      </Section>
      <Section>
        {visibleContacts.length > 0 ? (
          <ContactList contactData={visibleContacts} onDelete={deleteContact} />
        ) : (
          <Notification />
        )}
      </Section>
    </Container>
  );
};

export default App;
