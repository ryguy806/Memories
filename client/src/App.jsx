import React from "react";
import { AppBar, Container, Typography } from "@material-ui/core";
import memories from "./images/memories.png";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
          <img src={memories} alt="memories" height="60" />
        </Typography>
      </AppBar>
    </Container>
  );
};

export default App;
