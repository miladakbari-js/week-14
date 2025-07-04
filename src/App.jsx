import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Layout from "./Layout/Layout";
import ContactsList from "./components/ContactsList";

function App() {
  const [contacts, setContacts] = useState([]);
  

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const editHandler = (id) => {
    const editContact = contacts.find((contact) => contact.id === id);
    console.log(editContact);
  };
  return (
    <>
      <Layout>
        <main>
          <Form contacts={contacts} setContacts={setContacts} />
          <ContactsList
            contacts={contacts}
            setContacts={setContacts}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        </main>
      </Layout>
    </>
  );
}

export default App;
