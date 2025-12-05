import { Container, Typography, Box } from "@mui/material";
import { QnAPage } from "./pages/QnAPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Container maxWidth="sm">
          <Box mt={4}>
            <Typography variant="h4" gutterBottom>
              Quiz App
            </Typography>
            <nav className="navbar">
              <Link to="/login">Login</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/test">Test</Link>
            </nav>
          </Box>
        </Container>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="test" element={<QnAPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
