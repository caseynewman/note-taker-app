const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = 3113

const app = express()

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const api = require('./routes/index')

app.use('/api', api)

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
)

