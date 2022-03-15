const AddForm = (props) => {
  const persons = props.persons;
  const setPersons = props.setPersons;
  const newName = props.newName;
  const setNewName = props.setNewName;
  const newNum = props.newNum;
  const setNewNum = props.setNewNum;

  const handleAddName = (event) => {
    setNewName(event.target.value);
  };
  const handleAddNum = (event) => {
    setNewNum(event.target.value);
  };

  const addPhoneBook = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNum,
      id: persons.length + 1
    };
    const isDuplicate = persons.every((each) => each.name !== newName);

    if (isDuplicate) {
      setPersons(persons.concat(nameObject));
    } else {
      alert(`${newName} was already added!`);
    }
    setNewName("");
    setNewNum("");
  };
  return (
    <div>
      <form onSubmit={addPhoneBook}>
        <div>
          name: <input value={newName} onChange={handleAddName} />
        </div>
        <div>
          number: <input value={newNum} onChange={handleAddNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};
export default AddForm;
