import { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { QnA } from "./pages/QnA";
import type { IQuestion } from "./models/Question";

function App() {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/quiz/questions")
      .then((res) => res.json())
      .then(setQuestions)
      .catch((err) => console.error("Failed to fetch questions", err));
  }, []);

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Quiz App
        </Typography>
        <Typography variant="body1">
          Questions loaded: {questions.length}
        </Typography>
        <QnA questions={questions} />
      </Box>
    </Container>
  );
}

export default App;