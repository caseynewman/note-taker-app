// our instructor had us pair in class on this homework
const express = require('express');
const path = require('path');

const PORT = 3113

const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const api = require('./routes/index');

app.use('/api', api);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.delete('/api/notes/:id', (req, res) => {
    console.log('request to delete file received')
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});
