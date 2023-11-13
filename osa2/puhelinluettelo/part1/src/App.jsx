import {useState, useEffect} from 'react';
import './App.css'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

const personsURL = 'http://localhost:3001/persons';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhonenumber, setNewPhonenumber] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    axios
    .get(personsURL)
    .then(res => {
      setPersons(res.data);
    })
    .catch(err => console.log(err)); 
  }, []);

  const addName = (e) => {
    e.preventDefault();
    if(persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = {name: newName, phonenumber: newPhonenumber};
    const personsCopy = [...persons];
    personsCopy.push(newPerson);
    setPersons(personsCopy);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addName={addName} newName={newName} setNewName={setNewName} newPhonenumber={newPhonenumber} setNewPhonenumber={setNewPhonenumber}/>
      <Filter searchName={searchName} persons={persons} setSearchName={setSearchName}/>
      <h2>Numbers</h2>
      <Persons searchName={searchName} persons={persons} />
    </div>
  )
}

export default App
