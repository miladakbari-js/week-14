function ContactCard({ data }) {
  console.log(data);
  return (
    <div>
      <table>
       
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td>{data.lastName}</td>
            <td>{data.email}</td>
            <td>{data.job}</td>
            <td>{data.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ContactCard;
