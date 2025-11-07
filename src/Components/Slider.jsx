import React from "react";
import { ProjectCard } from "./ProjectCard";

const totalProjects = 5;
const degrees = Array.from(
  { length: totalProjects },
  (_, index) => (360 / totalProjects) * index
);

export const Slider = () => {
  return (
    <div className="slider" style={{ "--quantity": degrees.length }}>
      {degrees.map((deg, index) => (
        <div key={index} className="item" style={{ "--position": `${deg}deg` }}>
          {/* <img src="../src/assets/icon.png" alt={`icon-${index}`} /> */}
          <ProjectCard />
        </div>
      ))}
    </div>
  );
};
