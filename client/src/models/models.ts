export interface IQuestion {
  _id?: string;
  text: string;
  options: IOption[];
  description?: string;
}

export interface IOption {
  _id?: string;
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

export interface IUserChoice { 
    [key : string] : boolean;
}

export interface ITest { 
    userName : string;
    userChoices : IUserChoice[];
}