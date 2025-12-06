import mongoose, { Schema, Document } from "mongoose";

export interface IOption {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface IQuestion extends Document {
  text: string;
  options: IOption[];
  description?: string;
}

const OptionSchema: Schema = new Schema<IOption>({
  id: { type: Number, required: true },
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

const QuestionSchema: Schema = new Schema<IQuestion>({
  text: { type: String, required: true },
  options: { type: [OptionSchema], required: true },
  description: { type: String, required: false },
});

export const Question = mongoose.model<IQuestion>("Question", QuestionSchema);