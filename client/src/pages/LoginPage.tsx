import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../services/AuthContext";
import TextField from "@mui/material/TextField";
import { Box, Container } from "@mui/material";

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

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState("");
  const authContext = useContext(AuthContext);
  const loginHandler = () => {
    if (loggedInUser !== "" && loggedInUser.length > 0) {
      authContext.setLoggedIn(true);
      authContext.setLoggedInUser(loggedInUser);
      navigate("/home/dashboard");
    }
  };
  return (
    <>
      <Container sx={style}>
        <header>
          <h1>Quiz App</h1>
        </header>
        <h3>Login Page</h3>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <TextField
            id="login"
            label="Username"
            variant="outlined"
            onChange={(event) => setLoggedInUser(event.target.value)}
          />
          <Button variant="outlined" onClick={loginHandler}>
            Login
          </Button>
        </Box>
      </Container>
    </>
  );
};
