const { v4: uuidv4 } = require('uuid');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

console.log(uuidv4());

const users = [
  { name: 'Bobby', age: 15 },
  { name: 'Peter', age: 20 },
  { name: 'Chris', age: 25 },
];

let todos = [
  {
    text: 'купити молоко',
    isDone: false,
    created: '2022-12-05T17:05:32.585Z',
    id: '1',
  },
  {
    text: 'купити сир',
    isDone: false,
    created: '2022-12-05T17:05:34.871Z',
    id: '2',
  },
  {
    text: 'винести сміття',
    isDone: true,
    created: '2022-12-05T17:05:37.015Z',
    id: '3',
  },
];

app.use(cors());

// --- todos ---

app.get('/todos', (req, res) => {
  // res.header('Access-Control-Allow-Origin', 'http://localhost:4040');
  res.json(todos);
});

app.delete('/todos/:id', (req, res) => {
  todos = todos.filter(({ id }) => id !== req.params.id);
  res.json(todos);
});

// ---- test endpoints -----
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
