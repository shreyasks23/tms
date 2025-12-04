export interface IQuestion {
  _id: string;
  text: string;
  options: string[];
  correctIndex: number;
  description?: string;
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