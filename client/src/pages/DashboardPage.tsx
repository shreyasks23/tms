import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

export const DashboardPage = () => {
  return (
    <>
      <AppBar color="transparent" position="fixed">
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
            {/* <ButtonGroup>
              <Button onClick={() => navigate("/test")}>Test</Button>
            </ButtonGroup> */}
          </Box>
        </Toolbar>
      </AppBar>

      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to the Dashboard! This is where you can manage your quizzes and
        view your progress.
      </Typography>
    </>
  );
};
