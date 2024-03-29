// our instructor had us pair in class on this homework
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes');

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});
