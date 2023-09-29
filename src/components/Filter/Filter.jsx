export default function Filter({ filter, contacts, value, onChange }) {
  return (
    <label>
      Find contact by name
      <br />
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
}
