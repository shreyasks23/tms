import axios from "axios";
import type { ITest, IQuestion } from "../models/models";

const API_URL = "http://localhost:3000/api/quiz";

export const addQuestion = async (question: IQuestion) => {
  return axios.post<IQuestion>(`${API_URL}/question`, { question });
};

export const getQuestions = async () => {
  return axios.get<IQuestion[]>(`${API_URL}/questions`);
};

export const submitTest = async (testRes: ITest) => {
  console.log(testRes);
  return axios.post<ITest>(`${API_URL}/test`, { testRes });
};
