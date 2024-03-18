import express from 'express';
const router = express.Router();

router.post('/notes', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new db.Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/notes', async (req, res) => {
  try {
    const notes = await db.Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/notes/:id', async (req, res) => {
  try {
    const note = await db.Note.findById(req.params.id);
    if (note == null) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

rexports.updateNote = async (req, res) => {
  try {
      const { title, content } = req.body;
      const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
          title,
          content,
          updatedAt: Date.now()
      }, { new: true });
      res.json(updatedNote);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteNote = async (req, res) => {
  try {
      await Note.findByIdAndDelete(req.params.id);
      res.json({ message: 'Note deleted successfully' });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
  }
};