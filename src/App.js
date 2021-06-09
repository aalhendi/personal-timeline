import styled, { ThemeConsumer, ThemeProvider } from "styled-components"
import Home from "./components/Home.js"

function App() {
    const theme  = {
        backgroundColor: "#000000",
        mainColor: "#FFFFFF",
        sideColor: "#FF0000"
        };

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
