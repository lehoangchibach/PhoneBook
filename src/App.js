import { useState } from "react";
import DispName from "./components/DispName";
import AddForm from "./components/AddForm";
import FilterName from "./components/FilterName";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 }
  ]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [filter_arg, setFilter] = useState("");

  const filter_PhoneBook = persons.filter((each) =>
    each.name.toLowerCase().includes(filter_arg.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <FilterName filter_arg={filter_arg} setFilter={setFilter} />

      <AddForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNum={newNum}
        setNewNum={setNewNum}
      />

      <h2>Numbers</h2>
      <DispName props={filter_PhoneBook} />
    </div>
  );
};

export default App;
