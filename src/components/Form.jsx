import { useEffect, useState } from "react";
import inputs from "../constants/inputs.js";
import styles from "./Form.module.css";

function Form({
  contacts,
  setContacts,
  editableContact,
  setEditableContact,
  showForm,
  setShowForm,
  setAllContacts,
}) {
  useEffect(() => {
    if (editableContact) {
      setContact(editableContact);
    }
  }, [editableContact]);

  const [errors, setErrors] = useState({});
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    job: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.job ||
      !contact.phone
    ) {
      alert("please enter Valid Data!!!");
      return;
    }

    const newErrors = {};
    for (let input of inputs) {
      const value = contact[input.name];
      if (input.regex && !input.regex.test(value)) {
        newErrors[input.name] = input.errorMessage;
      }
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    if (editableContact) {
      const updatedContact = contacts.map((item) =>
        item.id === editableContact.id ? contact : item
      );
      setContacts(updatedContact);
      setAllContacts(updatedContact);
      setEditableContact(null);
      setShowForm(!showForm);
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newContact = { ...contact, id: id };
      setContacts((contacts) => [...contacts, newContact]);
      setAllContacts((contacts) => [...contacts, newContact]);
      setShowForm(!showForm);
    }

    setContact({
      id: "",
      name: "",
      lastName: "",
      job: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className={styles.container}>
      <div>
        {inputs.map((input, index) => (
          <div key={index} className={styles.inputs}>
            <input
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              value={contact[input.name]}
              onChange={changeHandler}
              className={errors[input.name] ? styles.invalid : ""}
            />
            {errors[input.name] && (
              <p className={styles.error}>{errors[input.name]}</p>
            )}
          </div>
        ))}
        <button
          onClick={addHandler}
          className={editableContact ? styles.edit : styles.create}
        >
          {editableContact ? "Edit" : "Create"}
        </button>
      </div>
    </div>
  );
}

export default Form;
