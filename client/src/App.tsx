import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { DashboardPage } from "./pages/DashboardPage";
import { Container, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { QnAPage } from "./pages/QnAPage";
import { HomePage } from "./pages/HomePage";

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed>
        <Box mt={4}>
          <Routes>
            <Route path="/home" element={<HomePage />}>
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="test" element={<QnAPage />} />
            </Route>
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
