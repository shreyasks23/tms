import mongoose, { Schema, Document } from "mongoose";

export interface IQuestion extends Document {
  text: string;
  options: string[];
  correctIndex: number;
  description?: string;
}

const QuestionSchema: Schema = new Schema<IQuestion>({
  text: { type: String, required: true },
  options: { type: [String], required: true },
  correctIndex: { type: Number, required: true },
  description: { type: String, required: false },
});

export const Question = mongoose.model<IQuestion>("Question", QuestionSchema);