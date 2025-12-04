import { Question } from "../components/Question";
import type { IQuestion } from "../models/Question";

interface IQnAProps {
questions: IQuestion[];

}

export const QnA = (props : IQnAProps) => {
  return (
    <>
      {props.questions.map((question) => (
            <Question {...question} key={question._id} />
      ))}
    </>
  );
}