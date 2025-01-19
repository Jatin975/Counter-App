import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import "./App.css";
import "./index.css";
import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "auto",
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#F5F5F5",
        textAlign: "center",
        mt: 5,
      }}
    >
      <Header />
      <Main />
    </Box>
  );
}

export default App;
