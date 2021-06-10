import styled, { ThemeConsumer, ThemeProvider } from "styled-components";
import Home from "./components/Home.js";
import Timeline from "./components/Timeline.js";
import "./App.css";

function App() {
    const theme = {
        backgroundColor: "#000000",
        mainColor: "#FFFFFF",
        sideColor: "#FF0000",
    };

    return (
        <ThemeProvider theme={theme}>
            <Home />
            <Timeline />
        </ThemeProvider>
    );
}

export default App;
