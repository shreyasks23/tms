import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { DashboardPage } from "./pages/DashboardPage";
import {
  Container,
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { QnAPage } from "./pages/QnAPage";
import { AuthContext } from "./services/AuthContext";
import { useContext } from "react";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      main: "#4CAF50",
      dark: "#009688",
    },
  },
});

function App() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed>
        <AppBar color="transparent" position="fixed">
          <Toolbar>
            <IconButton></IconButton>
            <Typography variant="h4" gutterBottom>
              Quiz App
            </Typography>
            <Typography variant="h6" gutterBottom>
              {authContext.isLoggedIn ? authContext.loggedInUser : "Guest"}
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
                display: "flex",
              }}
            >
              <ButtonGroup>
                <Button onClick={() => navigate("/")}>
                  {authContext.isLoggedIn ? "Logout" : "Login"}
                </Button>
              </ButtonGroup>
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Box mt={4}>
          <Routes>
            <Route path="test" element={<QnAPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
