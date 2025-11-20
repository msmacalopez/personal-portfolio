import React from "react";
import "../styles/projectCard.css";

export const ProjectCard = ({ video, title, text, tech }) => {
  return (
    <>
      <div className="project-card">
        <div className="card-content">
          <video src={video} autoPlay loop muted playsInline />
          <h1>
            <b>{title}</b>
          </h1>
          <p>Tech-Stack: {tech}</p>
        </div>
        <div className="card-proj-text">{text}</div>
      </div>
    </>
  );
};
