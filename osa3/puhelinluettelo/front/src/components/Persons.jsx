import React from 'react';
import {deletePerson, getAll} from '../services/persons';
const Persons = (props) => {
    const {searchName, persons, setPersons} = props;

    const sendDelete = (id) => {
        if(!window.confirm('Do you really want to remove this person from phonebook?')) {
            return;
        }
        deletePerson(id);
        getAll()
        .then(res => {
            setPersons(res.data);
        });
    }

    return (
        <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Phonenumber</th>
            <th>Action</th>
          </tr>
          {searchName.length === 0 ? persons.map((person) => (
              <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.phonenumber}</td>
                <td>
                    <button onClick={() => sendDelete(person.id)}>Remove</button>
                </td>
              </tr>
          )) : null}
          {searchName.length > 0 ? 
            persons.map((person) => {
              const trimmedName = person.name.trim().toLowerCase();
              if(trimmedName.includes(searchName.trim().toLowerCase())) {
                return (
                  <tr key={person.id}>
                    <td>{person.name}</td>
                    <td>{person.phonenumber}</td>
                    <td>
                        <button onClick={() => sendDelete(person.id)}>Remove</button>
                    </td>
                  </tr>
                )
              }
            })
           : null}
        </tbody>
      </table>
    )

}

export default Persons;