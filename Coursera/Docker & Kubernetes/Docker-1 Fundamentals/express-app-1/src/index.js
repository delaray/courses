const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const users = [];

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUserID = req.body;

  if (!newUserID.id) {
    return res.status(400).json({ error: 'Missing user ID' });
  }

  if (users.includes(newUserID)) {
    return res.status(400).json({ error: 'User already exists' });
  }

  users.push(newUserID);
  res.sendStatus(201).send('User registered.');
  
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
