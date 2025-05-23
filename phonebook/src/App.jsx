import { use, useState } from "react";
import Filter from "./components/filter";
import Person from "./components/person";
import Form from "./components/form";

const App=()=>{
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const handleNameChange = (event) =>{
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) =>{
    setFilterName(event.target.value);

    //console.log(event.target.value,' - ',persons.filter(person=>person.name.includes(event.target.value)))
  }

  const addName = (event) =>{
    event.preventDefault();
    const objectNewName = {name:newName, number: newNumber, id:(persons.length+1)}

    if(persons.find(person => person.name.toLowerCase() === objectNewName.name.toLowerCase()) !== undefined){
      alert(`${objectNewName.name} is already added on the phonebook!`)
    }else{
      setPersons(persons.concat(objectNewName));
      setNewName('');
      setNewNumber('');
    }
  }

   const filteredPersons = filterName.trim() === '' ? persons : persons.filter(person=>person.name.toLowerCase().includes(filterName.toLowerCase().trim()))

  return(
    <div>
      <h1>Phonebook</h1>
      <Filter filterName={filterName} onChange={handleFilterChange} />
      <Form addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Person filteredPersons={filteredPersons} />
    </div>
  )
}

export default App