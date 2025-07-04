function ContactCard({ data , deleteHandler , editHandler }) {
  
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.lastName}</td>
      <td>{data.email}</td>
      <td>{data.job}</td>
      <td>{data.phone}</td>
      <td>
        <button onClick={()=>editHandler(data.id)}>ویرایش</button>
        <button onClick={()=>deleteHandler(data.id)}>حذف</button>
      </td>
    </tr>
  );
}

export default ContactCard;
