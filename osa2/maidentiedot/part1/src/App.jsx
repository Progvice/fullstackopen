import {useState} from 'react';
import axios from 'axios';
import './App.css'
import CountryDetails from './components/CountryDetails';

const allCountries = 'https://studies.cs.helsinki.fi/restcountries/api/all';

function App() {
  const [searchField, setSearchField] = useState('');
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  // Fetch all countries in the beginning to prevent unnecessary API calls 
  if(countries.length === 0) {
    axios.get(allCountries)
    .then(res => {
      setCountries(res.data);
    })
    .catch(err => console.log(err));
  }
  const changeInputAndSearch = (e) => {
    setSearchField(e.target.value);
    setFilteredCountries(countries.filter((country) =>  country.name.common.trim().toLowerCase().includes(searchField.trim().toLowerCase())));
    console.log(filteredCountries);
  }

  const selectCountry = (e, country) => {
    setSearchField('');
    setFilteredCountries([country]);
  }

  return (
    <>
      <input value={searchField} onChange={changeInputAndSearch} placeholder='Country name'/>
      {countries.length !== 0 && searchField.length !== 0 ? filteredCountries.map((country, key) => {
        if(country.name.common.trim().toLowerCase().includes(searchField.trim().toLowerCase())) {
          return (
            <>
              <p key={key}>{country.name.common}</p>
              <button onClick={(e) => selectCountry(e, country)}>Show</button>
            </>
          );
        }
      }) : searchField.length === 0 ? (
        <p>Start by writing country name on input field</p>
      ) : null}
      {filteredCountries.length === 1 && (
        <CountryDetails country={filteredCountries[0]}/>
      )}
    </>
  )
}

export default App
