import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Layout from "./Layout/Layout";
import ContactsList from "./components/ContactsList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editableContact, setEditableContact] = useState(null);

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const editHandler = (id) => {
    const editContact = contacts.find((contact) => contact.id === id);
    console.log(editContact);
   setEditableContact(editContact);
  };

  const deleteAllHandler = ()=>{
    setContacts([])
  }
  return (
    <>
      <Layout>
        <main>
          <Form
            contacts={contacts}
            setContacts={setContacts}
            editableContact={editableContact}
            setEditableContact={setEditableContact}
            
          />
          <ContactsList
            contacts={contacts}
            setContacts={setContacts}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            deleteAllHandler={deleteAllHandler}
          />
        </main>
      </Layout>
    </>
  );
}

export default App;
