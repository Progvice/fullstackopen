import axios from 'axios';
const personsURL = 'http://localhost:3001/api/persons';

const getAll = () => {
    return axios.get(personsURL);
}

const create = newPerson => {
    return axios.post(personsURL, newPerson);
}

const update = (id, newPerson) => {
    return axios.put(`${personsURL}/${id}`, newPerson);
}

const deletePerson = (id) => {
    return axios.delete(`${personsURL}/${id}`);
}

export {getAll, create, update, deletePerson};