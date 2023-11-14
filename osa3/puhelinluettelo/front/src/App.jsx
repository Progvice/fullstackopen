import {useState, useEffect} from 'react';
import './App.css'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
import {getAll, create, update} from './services/persons';
function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhonenumber, setNewPhonenumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [notificationType, setNotificationType] = useState('');
  useEffect(() => {
    getAll()
    .then(res => {
      setPersons(res.data);
    })
    .catch(err => console.log(err)); 
  }, []);

  useEffect(() => {
    if(errorMsg === '') {
      return;
    }
    setTimeout(() => {
      setErrorMsg('');
    }, 5000);
  }, [errorMsg]);


  const updateAndFetch = (personDetails) => {
    if(!window.confirm('This person already exists. Do you want to update this persons information?')) {
      return;
    }
    update(personDetails.id, {name: personDetails.name, phonenumber: newPhonenumber, id: personDetails.id})
    .then(res => {
      console.log(res);
      setNotificationType('success');
      setErrorMsg(`Person ${personDetails.name} details has been updated succesfully!`);
    })
    .catch(err => {
      console.log(err);
      setNotificationType('error');
      setErrorMsg(`Could not update ${personDetails.name}. This person does not exist anymore.`);
    });

    getAll()
    .then(res => {
      setPersons(res.data);
    })
    .catch(err => {
      console.log(err);
      setNotificationType('error');
      setErrorMsg('Could not fetch records.');
    }); 
  }

  const addName = (e) => {
    e.preventDefault();
    if(persons.some(person => person.name === newName && person.phonenumber === newPhonenumber)) {
      setNotificationType('warning');
      setErrorMsg('This record already exists with identical information.');
      return;
    }
    const personDetails = persons.find(person => person.name === newName && person.phonenumber !== newPhonenumber);
    console.log(personDetails);
    if(personDetails) {
      updateAndFetch(personDetails);
      return;
    }
    const newPerson = {name: newName, phonenumber: newPhonenumber};
    const personsCopy = [...persons];
    personsCopy.push(newPerson);
    setPersons(personsCopy);

    create(newPerson)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {errorMsg !== '' && (
        <Notification message={errorMsg} type={notificationType}/>
      )}
      <PersonForm addName={addName} newName={newName} setNewName={setNewName} newPhonenumber={newPhonenumber} setNewPhonenumber={setNewPhonenumber}/>
      <Filter searchName={searchName} persons={persons} setSearchName={setSearchName}/>
      <h2>Numbers</h2>
      <Persons searchName={searchName} persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App
