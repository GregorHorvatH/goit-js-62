const { v4: uuidv4 } = require('uuid');
const express = require('express');
const app = express();
const port = 3000;

console.log(uuidv4());

const users = [
  { name: 'Bobby', age: 15 },
  { name: 'Peter', age: 20 },
  { name: 'Chris', age: 25 },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/sdgsdgsdgds', (req, res) => {
  res.send('<h1>Ha-ha-ha</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
