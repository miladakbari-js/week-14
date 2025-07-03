import ContactCard from "./ContactCard";

function ContactsList({ contacts, setContacts }) {
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
          </tr>
        </thead>
    </table>

    <div>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} data={contact} />
      ))}
    </div>
      </>
  );
}

export default ContactsList;
