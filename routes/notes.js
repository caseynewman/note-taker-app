// our instructor had us pair in class on this homework
const router = require('express').Router();
const { readFromFile, readAndAppend, deleteNoteFromFile } = require('../helpers/fs-utils');
const uuid = require('../helpers/uuid');

router.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

router.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuid(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully`);
    } else {
      res.error('Error in adding note');
    }
})

router.delete('/:id', (req, res) => {
    console.log('request to delete file received');
    const id = req.params.id;
    deleteNoteFromFile(id, './db/db.json');
});

module.exports = router
