import { useState } from "react";
import inputs from "../constants/inputs.js";


function Form({contacts , setContacts}) {
  
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
    const id = Math.floor(Math.random() * 1000);
    const newContact = { ...contact, id: id };
    setContacts((contacts) => [...contacts, newContact]);
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
    <div>
      <div>
        {inputs.map((input, index) => (
          <input
            name={input.name}
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
      <button onClick={addHandler}>ثبت</button>
      </div>
      
    </div>
  );
}

export default Form;
