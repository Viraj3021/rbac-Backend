import mongoose, { Schema, Document } from 'mongoose';

export interface INote extends Document {
  userId: string;
  title: string;
  description: string;
  status: string;
}

const NoteSchema: Schema = new Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, required: true, enum: ['active', 'completed'] },
});

export default mongoose.model<INote>('Note', NoteSchema);
