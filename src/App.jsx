import { useState } from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import bgvideo from "./assets/bg_stars.mp4";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <video
        className="bg-video"
        src={bgvideo}
        autoPlay
        loop
        muted
        playsInline
      /> */}
      <div className="wrapper">
        <NavBar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
