import React from "react";
import "../styles/projects.css";
import Slider from "./ProjectSlider.jsx";

export default function Projects() {
  return (
    <div id="projects" className="section projects">
      <div className="blur"></div>
      <Slider />
    </div>
  );
}
