const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

router.put('/notes/:id', notesController.updateNote);
router.delete('/notes/:id', notesController.deleteNote);

module.exports = router;
