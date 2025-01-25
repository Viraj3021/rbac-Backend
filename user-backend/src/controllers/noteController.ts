
// Handle the CRUD operations for the notes
import { Request, Response } from 'express';
import Note from '../models/Note';

export const getNotes = async (req: Request, res: Response) => {
  const notes = await Note.find({ userId: req.user?.id });
  res.json(notes);
};

export const createNote = async (req: Request, res: Response) => {
  const { title, description, status } = req.body;

  const note = new Note({ userId: req.user?.id, title, description, status });
  await note.save();

  res.status(201).json(note);
};

export const updateNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  const note = await Note.findByIdAndUpdate(id, updates, { new: true });
  res.json(note);
};

export const deleteNote = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Note.findByIdAndDelete(id);
  res.status(204).send('<p>Noted deleted</p>');
};
