const router = require('express').Router();
const notesRouter = require('./notes');
const htmlRouter = require('./html-routes');

router.use('/api/notes', notesRouter);
router.use('/', htmlRouter);

module.exports = router;
