import "./assets/styles/App.css";
import Hero from "./components/home/Hero";
import Navbar from "./components/layout/Navbar/Navbar";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
    </>
  );
}

export default App;
