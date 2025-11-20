import React, { useState } from "react";
import "../styles/slider.css";
import { ProjectCard } from "./ProjectCard.jsx";
import { projectsData } from "../assets/data/projectsData.js";

export default function Slider() {
  const [active, setActive] = useState(Math.floor(projectsData.length / 2));

  const nextSlide = () => {
    if (active < projectsData.length - 1) setActive(active + 1);
  };

  const prevSlide = () => {
    if (active > 0) setActive(active - 1);
  };

  const getTransform = (index) => {
    const diff = index - active;
    if (diff === 0)
      return {
        transform: "none",
        zIndex: 1,
        filter: "none",
        opacity: 1,
      };

    const translateX = 120 * diff;
    const scale = 1 - Math.abs(0.2 * diff);
    const rotateY = diff > 0 ? -1 : 1;
    const blur = Math.abs(diff) > 2 ? 0 : 5;
    const opacity = Math.abs(diff) > 2 ? 0 : 0.6;

    return {
      transform: `translateX(${translateX}px) scale(${scale}) perspective(16px) rotateY(${rotateY}deg)`,
      zIndex: -Math.abs(diff),
      filter: `blur(${blur}px)`,
      opacity,
    };
  };

  return (
    <div className="project-slider">
      <div className="slider">
        {projectsData.map((proj, index) => (
          <div className="item" key={index} style={getTransform(index)}>
            <ProjectCard
              video={proj.video}
              title={proj.title}
              text={proj.text}
              tech={proj.tech}
            />
          </div>
        ))}

        <button id="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button id="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
}
