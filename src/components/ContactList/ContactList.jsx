export default function ContactList({ contacts, filter, onDelete }) {
  if (filter !== '') {
    return (
      <ul>
        {contacts.map(contact => {
          if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
            return (
              <li key={contact.id} id={contact.id}>
                {`${contact.name} - ${contact.number}`}
                <button
                  type="text"
                  onClick={e => {
                    onDelete(e.target.parentElement);
                  }}
                >
                  delete
                </button>
              </li>
            );
          }
          return;
        })}
      </ul>
    );
  }

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id} id={contact.id}>
            {`${contact.name} - ${contact.number}`}
            <button
              type="text"
              onClick={e => {
                onDelete(e.target.parentElement);
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
