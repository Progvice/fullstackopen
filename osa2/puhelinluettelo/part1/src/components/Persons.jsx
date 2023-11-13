import React from 'react';
const Persons = (props) => {
    const {searchName, persons} = props;
    return (
        <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Phonenumber</th>
          </tr>
          {searchName.length === 0 ? persons.map((person) => (
              <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.phonenumber}</td>
              </tr>
          )) : null}
          {searchName.length > 0 ? 
            persons.map((person) => {
              const trimmedName = person.name.trim().toLowerCase();
              if(trimmedName.includes(searchName.trim().toLowerCase())) {
                return (
                  <tr key={person.name}>
                    <td>{person.name}</td>
                    <td>{person.phonenumber}</td>
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