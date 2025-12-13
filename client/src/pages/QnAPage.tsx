import { useState, useEffect, useContext } from "react";
import { Question } from "../components/Question";
import { Box, Button, Modal, Typography } from "@mui/material";
import { getQuestions, submitTest } from "../services/questionService";
import type { ITest, IUserChoice, IQuestion } from "../models/models";
import { AuthContext } from "../services/AuthContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const QnAPage = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [userChoices, setUserChoices] = useState<IUserChoice[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [showAns, setShowAns] = useState(false);
  const authContext = useContext(AuthContext);
  const [testResult, setTestResult] = useState<ITest>({
    userName: authContext.loggedInUser,
    userChoices,
  } as ITest);
  const handleClose = () => setOpenModal(false);

  useEffect(() => {
    getQuestions()
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch questions", err);
      });
  }, []);

  useEffect(() => {
    if (testResult.userChoices.length > 0) {
      submitTest(testResult);
    }
  }, [testResult]);

  const handleSingleAnswer = (userAns: IUserChoice) => {
    setUserChoices((prev) => {
      return [...prev, { ...userAns }];
    });
  };

  const handleTestSubmit = () => {
    // TODO handle answer update for each question here
    // backend integration pending
    setTestResult(() => {
      return {
        userName: authContext.loggedInUser,
        userChoices,
      };
    });
    setOpenModal(true);
    setShowAns(true);
  };
  return (
    <>
      <Box>
        <Typography variant="body1">
          Questions loaded: {questions.length}
        </Typography>
        {questions.map((question) => (
          <Question
            question={question}
            showAnswer={showAns}
            key={question._id}
            onAnswerSelected={handleSingleAnswer}
          />
        ))}

        <Button variant="contained" color="primary" onClick={handleTestSubmit}>
          Submit Answers
        </Button>
      </Box>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Test Submitted successfully!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {`Correct answers submitted : ${
              Object.values(userChoices).length
            } out of ${questions.length}`}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
