import express from 'express';

// Create a new note
export const createNote = async (req, res) => {
    try {
      const { title, content } = req.body;
      const newNote = new Note({ title, content });
      const savedNote = await newNote.save();
      res.status(201).json(savedNote);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  


  export const getNotes = async (req, res) => {
    try {
      const notes = await Note.find();
      res.json(notes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


export const getNoteById = async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).json({ message: 'Note not found' });
      }
      res.json(note);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


