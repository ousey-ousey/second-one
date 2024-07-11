import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Stack,
  Box,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import getDesignTokens from "./styles/MyTheme.jsx";
import PrimarySearchAppBar from "./component/AppBar.jsx";
import MyList from "./component/MyList.jsx";
import Posts from "./component/Posts.jsx";
import RightBar from "./component/RightBar.jsx";
import AddPost from "./component/AddPost.jsx";

function App() {
  const [showlist, setshowlist] = useState("none");
  const [mode, setMyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PrimarySearchAppBar showlist={showlist} setshowlist={setshowlist} />
      <Box>
        <Stack
          direction="row"
          sx={{
            overflow: "hidden", // Prevent scrolling
          }}
        >
          <MyList
            showlist={showlist}
            setshowlist={setshowlist}
            setMyMode={setMyMode} // Corrected prop name here
            sx={{
              flexGrow: 1.1,
              justifyContent: "center",
              display: "flex",
              height: "100%", // Ensure Box takes full height of Stack
              overflow: "auto", // Allow scrolling inside the Box if needed
            }}
          />

          <Posts
            sx={{
              flexGrow: 3,
              justifyContent: "center",
              display: "flex",
            }}
          />

          <RightBar
            sx={{
              flexGrow: 2,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
            theme={theme}
          />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
