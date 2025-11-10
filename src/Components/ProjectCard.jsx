import React from "react";

export const ProjectCard = ({ image, title, text }) => {
  return (
    <>
      <div className="project-card">
        <div className="card-content">
          <img src={image} alt="" />
          <h1>{title}</h1>
        </div>
        <div className="card-proj-text">{text}</div>
      </div>
    </>
  );
};
