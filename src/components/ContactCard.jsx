import styles from "./ContactCard.module.css"

function ContactCard({ data , deleteHandler , editHandler }) {
  
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.lastName}</td>
      <td>{data.email}</td>
      <td>{data.job}</td>
      <td>{data.phone}</td>
      <td className={styles.status}>
        <button onClick={()=>editHandler(data.id)} className={styles.edit}>Edit</button>
        <button onClick={()=>deleteHandler(data.id)} className={styles.delete}>Delete</button>
      </td>
    </tr>
  );
}

export default ContactCard;
