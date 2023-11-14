import {useState} from 'react';
const CountryDetails = ({country}) => {
    const [languages, setLanguages] = useState([]);
    if(languages.length === 0) {
        setLanguages(Object.entries(country.languages));
    }
    return (
        <>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
            <h4>Languages</h4>
            <ul>
                {languages.map((lang, key) => (
                    <li key={key}>{lang[1]}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={`${country.name.common} flag`}/>
        </>
    )
}

export default CountryDetails;