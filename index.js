const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! I can code now!!! Mahedi Hasan')
});

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01706332354' },
    { id: 2, name: 'sabnur', email: 'sabnur@gmail.com', phone: '01706332354' },
    { id: 3, name: 'salman', email: 'salman@gmail.com', phone: '01706332354' },
    { id: 4, name: 'purnima', email: 'purnima@gmail.com', phone: '01706332354' },
    { id: 5, name: 'alomgir', email: 'salomgir@gmail.com', phone: '01706332354' },
    { id: 6, name: 'vobita', email: 'vobita@gmail.com', phone: '01706332354' },
    { id: 7, name: 'razzak', email: 'razzak@gmail.com', phone: '01706332354' },
]

app.get('/users', (req, res) => {
    // console.log('query', req.query);
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
        // console.log(search);

    }
    else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening to port', port);
})