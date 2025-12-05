import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../services/AuthContext";
import TextField from "@mui/material/TextField";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState("");
  const authContext = useContext(AuthContext);
  const loginHandler = () => {
    authContext.setLoggedIn(true);
    authContext.setLoggedInUser(loggedInUser);
    navigate("/dashboard");
  };
  return (
    <>
      <header>
        <h1>Quiz App</h1>
      </header>
      <h3>Login Page</h3>
      <TextField
        label="Username"
        variant="outlined"
        onChange={(event) => setLoggedInUser(event.target.value)}
      />
      <Button variant="outlined" onClick={loginHandler}>
        Login
      </Button>
    </>
  );
};
