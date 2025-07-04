import ContactCard from "./ContactCard";

function ContactsList({ contacts, setContacts , deleteHandler , editHandler }) {
  console.log(contacts);
  return (
    <>
    <table>
       <thead>
          <tr>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>ایمیل</th>
            <th>شغل</th>
            <th>شماره تماس</th>
            <th>وضعیت</th>
          </tr>
        </thead>

    <tbody>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} data={contact} deleteHandler={deleteHandler} editHandler={editHandler}/>
      ))}
    </tbody>
      </table>
      </>
  );
}

export default ContactsList;
