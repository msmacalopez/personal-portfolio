import React from "react";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  return (
    <div id="projects" className="section projects">
      <div className="blur"></div>
      <div className="project-card-list">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
