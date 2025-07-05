import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Layout from "./Layout/Layout";
import ContactsList from "./components/ContactsList";
import Modal from "./components/Modal";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editableContact, setEditableContact] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [targetId, setTargetId] = useState(null);
  const [deleteAllModal, setDeleteAllModal] = useState(false);

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
    console.log(editContact);
    setEditableContact(editContact);
  };

  const deleteAllHandler = () => {
    // setContacts([]);
    setShowModal(true);
    setDeleteAllModal(true);
  };

  const confirmDeleteAll = () => {
    setContacts([]);
    setDeleteAllModal(false);
    setShowModal(false)
  };

  const cancelDeleteAll = () => {
    setDeleteAllModal(false);
  };
  return (
    <>
      <Layout>
        <main>
          <button onClick={() => setShowForm(!showForm)}>
            {showForm ? " بستن فرم" : "مخاطب جدید"}
          </button>
          {showForm && (
            <Form
              contacts={contacts}
              setContacts={setContacts}
              editableContact={editableContact}
              setEditableContact={setEditableContact}
              showForm={showForm}
              setShowForm={setShowForm}
            />
          )}
          <ContactsList
            contacts={contacts}
            setContacts={setContacts}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            deleteAllHandler={deleteAllHandler}
          />
          {(showModal || deleteAllModal) && (
            <Modal
              onConfirm={deleteAllModal ? confirmDeleteAll : confirmDelete}
              onCancel={deleteAllModal ? cancelDeleteAll : cancelDelete}
              message = {deleteAllModal ? "آیا از حذف همه مخاطب ها مطمئن هستید؟" : "آیا از حذف این مخاطب مطمئن هستید؟"}
            />
          )}
        </main>
      </Layout>
    </>
  );
}

export default App;
