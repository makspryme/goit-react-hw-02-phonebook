export default function Filter({ filter, contacts, value, onChange }) {
  return (
    <label>
      Find contact by name
      <br />
      <input type="text" name="filter" value={value} onChange={onChange} 
      />
    </label>

  );

  // if (filter !== '') {
  //   return (
  //     <ul>
  //       {contacts.map(contact => {
  //         if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
  //           return (
  //             <li key={contact.id}>{`${contact.name} - ${contact.number}`}</li>
  //           );
  //         }
  //       })}
  //     </ul>
  //   );
  // }

  // return (
  //   <ul>
  //     {contacts.map(contact => {
  //       return (
  //         <li key={contact.id}>{`${contact.name} - ${contact.number}`}</li>
  //       );
  //     })}
  //   </ul>
  // );
}
