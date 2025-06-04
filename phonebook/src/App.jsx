import { useEffect, useState } from "react";
import phonebookService from "./services/phonebook"
import Filter from "./components/filter";
import Person from "./components/person";
import Form from "./components/form";

const App=()=>{
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    phonebookService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        console.log(initialPersons)
      }
    )
  }, [])

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
    const objectNewName = {name:newName, number: newNumber}

    if(persons.find(person => person.name.toLowerCase() === objectNewName.name.toLowerCase()) !== undefined){
      alert(`${objectNewName.name} is already added on the phonebook!`)
    }else{
      phonebookService.create(objectNewName)
        .then(createdObject => {
          setPersons(persons.concat(createdObject));
          setNewName('');
          setNewNumber('');
        }) 
    }
  }

  const deleteLine = (person) =>{
    if(window.confirm(`Do you want to delete ${person.name} ?`)){
        phonebookService.destroy(person.id)
        .then(setPersons(persons.filter(p => p.id !== person.id)))
      }
  }

   const filteredPersons = filterName.trim() === '' ? persons : persons.filter(person=>person.name.toLowerCase().includes(filterName.toLowerCase().trim()))

  return(
    <div>
      <h1>Phonebook</h1>
      <Filter filterName={filterName} onChange={handleFilterChange} />
      <Form addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Person filteredPersons={filteredPersons} deleteLine={deleteLine} />
    </div>
  )
}

export default App