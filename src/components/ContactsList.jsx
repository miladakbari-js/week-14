import ContactCard from "./ContactCard";
import styles from "./ContactsList.module.css"
import SearchBox from "./SearchBox";

function ContactsList({
  contacts,
  deleteHandler,
  editHandler,
  deleteAllHandler,
  searchHandler
}) {
  return (
    <div className={styles.container}>
      {!!contacts.length && (
        <div className={styles.control}>
        <button onClick={deleteAllHandler} className={styles.deletebutton}>Delete All</button>
        <SearchBox  searchHandler={ searchHandler}/>
        </div>
      )}
      {!!contacts.length ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Phone Number</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <ContactCard
                key={contact.id}
                data={contact}
                deleteHandler={deleteHandler}
                editHandler={editHandler}
              />
            ))}
          </tbody>
        </table>
      ) : (
      <p>No Contact Yet !</p>
      )}
    </div>
  );
}

export default ContactsList;
