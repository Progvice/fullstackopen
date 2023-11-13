import {useState} from 'react';
import './App.css'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phonenumber: '040-123456' },
    { name: 'Ada Lovelace', phonenumber: '39-44-5323523' },
    { name: 'Dan Abramov', phonenumber: '12-43-234345' },
    { name: 'Mary Poppendieck', phonenumber: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhonenumber, setNewPhonenumber] = useState('');
  const [searchName, setSearchName] = useState('');

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
