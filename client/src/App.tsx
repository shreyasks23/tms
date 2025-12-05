import {
  Container,
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  ButtonGroup,
} from "@mui/material";
import { QnAPage } from "./pages/QnAPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes, useNavigate } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      main: '#4CAF50',
      dark: '#009688',
    },
  },
});

function App() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed>
          <AppBar color="transparent" position="static">
            <Toolbar>
              <IconButton></IconButton>
              <Typography variant="h4" gutterBottom>
                Quiz App
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  justifyContent: "flex-end",
                  display: "flex",
                }}
              >
                <ButtonGroup>
                  <Button onClick={() => navigate("/login")}>Login</Button>

                  <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>

                  <Button onClick={() => navigate("/test")}>Test</Button>
                </ButtonGroup>
              </Box>
            </Toolbar>
          </AppBar>
        <Box mt={4}>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="test" element={<QnAPage />} />
        </Routes>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
