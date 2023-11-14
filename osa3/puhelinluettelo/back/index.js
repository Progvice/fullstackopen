const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173'
}));
morgan.token('rawbody', (req) => {
    console.log(req.body);
    return JSON.stringify(req.body) || '-';
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :rawbody'));
let persons = [
    { 
        "name": "Arto Hellas", 
        "phonenumber": "040-123456",
        "id": 1
    },
    { 
        "name": "Ada Lovelace", 
        "phonenumber": "39-44-5323523",
        "id": 2
    },
    { 
        "name": "Dan Abramov", 
        "phonenumber": "12-43-234345",
        "id": 3
    },
    { 
        "name": "Mary Poppendieck", 
        "phonenumber": "39-23-6423122",
        "id": 4
    }
];
app.get('/api/persons', (req, res) => {
    res.json(persons);
});
app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(person => person.id === id);
    if(person === undefined) {
        res.status(404);
        res.json({
            status: false,
            msg: `Person with ID ${id} was not found`
        });
        return;
    }
    res.json(person);
})
app.get('/info', (req, res) => {
    const d = new Date();
    res.send(`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${d}</p>
    `)
});
app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(person => person.id === id);
    if(persons.indexOf(person) > -1) {
        persons.splice(persons.indexOf(person), 1);
    }
    else {
        res.json({
            status: false,
            msg: `Could not remove user with ID ${id}`
        });
        return;
    }
    res.json(persons);
});

app.post('/api/persons', (req, res) => {
    const required = ['name', 'phonenumber'];
    required.forEach(field => {
        if(!req.body[field]) {
            res.status(400);
            res.json({
                status: false,
                msg: `Request invalid - ${field} is missing`
            });
            return;
        }
    });
    const checkName = persons.find(checkName => checkName.name === req.body.name);
    if(checkName !== undefined) {
        res.status(400);
        res.json({
            status: false,
            msg: 'Person with same name already exists'
        });
        return;
    }
    const lastPerson = persons.length - 1;
    const newID = persons[lastPerson].id + 1;

    const newPerson = {
        "name": req.body.name,
        "phonenumber": req.body.phonenumber,
        id: newID
    };
    persons.push(newPerson);
    res.json(persons);
})


const p = 3001;

app.listen(p, () => {
    console.log(`Server running on port ${p}`);
});