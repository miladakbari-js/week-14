import { useState } from "react";
import styles from "./App.module.css";
import Form from "./components/Form";
import Layout from "./Layout/Layout";
import ContactsList from "./components/ContactsList";
import Modal from "./components/Modal";
import { createSearchHandler } from "./handlers/contactHandlers";

function App() {
  const [contacts, setContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  const [editableContact, setEditableContact] = useState(null);
  const [targetId, setTargetId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleteAllModal, setDeleteAllModal] = useState(false);
  const [clearSearch , setClearSearch] = useState(false)

  const searchHandler = createSearchHandler({allContacts , setContacts , setClearSearch})
  const deleteHandler = (id) => {
    setShowModal(true);
    setTargetId(id);
  };

  const confirmDelete = () => {
    const newContacts = contacts.filter((contact) => contact.id !== targetId);
    setContacts(newContacts);
    setShowModal(false);
    setTargetId(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setTargetId(null);
  };

  const editHandler = (id) => {
    setShowForm(true);
    const editContact = contacts.find((contact) => contact.id === id);
    setEditableContact(editContact);
  };

  const deleteAllHandler = () => {
    setShowModal(true);
    setDeleteAllModal(true);
  };

  const confirmDeleteAll = () => {
    setContacts([]);
    setDeleteAllModal(false);
    setShowModal(false);
  };

  const cancelDeleteAll = () => {
    setDeleteAllModal(false);
    setShowModal(false)
  };
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <div className={styles.start}>
            <div>
              <h1>Welcome to Task week14</h1>
              <p>For start please click on 'New Contact'</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className={showForm ? styles.close : styles.new}
            >
              {showForm ? "Close Form" : "New Contact"}
            </button>
          </div>

          {showForm && (
            <Form
              contacts={contacts}
              setContacts={setContacts}
              editableContact={editableContact}
              setEditableContact={setEditableContact}
              showForm={showForm}
              setShowForm={setShowForm}
              setAllContacts={setAllContacts}
            />
          )}

          <ContactsList
            contacts={contacts}
            setContacts={setContacts}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            deleteAllHandler={deleteAllHandler}
            searchHandler={searchHandler}
            clearSearch={clearSearch}
            setClearSearch={setClearSearch}
          />
          {(showModal || deleteAllModal) && (
            <Modal
              onConfirm={deleteAllModal ? confirmDeleteAll : confirmDelete}
              onCancel={deleteAllModal ? cancelDeleteAll : cancelDelete}
              message={
                deleteAllModal
                  ? "Delete All contacts?"
                  : "Delete This contact?"
              }
            />
          )}
        </main>
      </Layout>
    </>
  );
}

export default App;
