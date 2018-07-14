const app = (module.exports = require('express')());

app.get('/', (req, res) => res.json({ msg: 'Hello! Server is running!' }));

app.use('/api/items', require('./api/items'));

app.all('*', (req, res) => res.sendStatus(404));
