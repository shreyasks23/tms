import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../services/AuthContext";
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizIcon from '@mui/icons-material/Quiz';


export const HomePage = () => {
  const authContext = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  return (
    <>
      <AppBar color="transparent" position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Drawer variant="persistent" open={open} onClose={handleClose}>
            <List>
              <ListItem key="dashboard" disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleClose();
                    navigate("/home/dashboard");
                  }}
                >
                  <ListItemIcon>{<DashboardIcon/>}</ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
              <ListItem key="test" disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleClose();
                    navigate("/home/test");
                  }}
                >
                  <ListItemIcon>{<QuizIcon/>}</ListItemIcon>
                  <ListItemText primary="Test" />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
          <Typography style={{ margin: 2 }} variant="h4" gutterBottom>
            Quiz App
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: "flex",
            }}
          >
            <Button
              style={{ margin: 2 }}
              variant="text"
              onClick={() => navigate("/")}
            >
              {authContext.isLoggedIn ? "Logout" : "Login"}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Outlet />
    </>
  );
};
