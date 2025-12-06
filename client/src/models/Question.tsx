export interface IQuestion {
  _id: string;
  text: string;
  options: IOption[];
  correctIndex: number;
  description?: string;
}

export interface IOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface IAnswer {
    questionId: string;
    selectedIndex: number;
    response: string;
}

export interface IQuiz {
    title: string;
    questions: IQuestion[];
}