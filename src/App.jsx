import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Layout from "./Layout/Layout";
import ContactsList from "./components/ContactsList";


function App() {
  const [contacts, setContacts] = useState([]);
  return (
    <>
      <Layout>
    <main>
        <Form contacts={contacts} setContacts={setContacts}/>
        <ContactsList contacts={contacts} setContacts={setContacts}/>
    </main>
      </Layout>
    </>
  );
}

export default App;
