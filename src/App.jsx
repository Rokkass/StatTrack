import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Instruction from "./components/Instruction.jsx";

const theme = {
  colors: {
    white: "#FFFFFF",
    grey: "#F0F0F0",
    dark: "#151515",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <GlobalStyles />
        <Header />
        <Hero />
        <About />
        <Instruction />
      </div>
    </ThemeProvider>
  );
}

export default App;
