import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Slider } from "./Slider";

export default function Projects() {
  return (
    <div id="projects" className="section projects">
      <div className="blur"></div>
      <Slider />
      {/* <div className="project-card-list">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div> */}
    </div>
  );
}
