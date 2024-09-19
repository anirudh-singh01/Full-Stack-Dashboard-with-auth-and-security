import React, { createContext, useState } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Navbar, SideBar } from "./scenes";
import { Outlet } from "react-router-dom";

export const ToggledContext = createContext(null);

function App() {
  const user = localStorage.getItem('token'); // Check if user is logged in
  const [theme, colorMode] = useMode(); // Custom theme logic
  const [toggled, setToggled] = useState(false); // Toggled state for side bar
  const values = { toggled, setToggled };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToggledContext.Provider value={values}>
          <Box sx={{ display: "flex", height: "100vh", maxWidth: "100%" }}>
            {/* Conditionally render SideBar if user is logged in */}
            {user && <SideBar />}
            
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                maxWidth: "100%",
              }}
            >
              {/* Conditionally render Navbar if user is logged in */}
              {user && <Navbar />}

              <Box sx={{ overflowY: "auto", flex: 1, maxWidth: "100%" }}>
                {/* Render the Outlet for child routes */}
                <Outlet />
              </Box>
            </Box>
          </Box>
        </ToggledContext.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
