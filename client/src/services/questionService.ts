import axios from "axios";
import type { IQuestion } from "../models/Question";

const API_URL = "http://localhost:3000/api/quiz";

export const addQuestion = async (question : IQuestion) =>{
    return axios.post<IQuestion>(`${API_URL}/question`, {question});

}

export const getQuestions = async () => {
    return axios.get<IQuestion[]>(`${API_URL}/questions`);
}