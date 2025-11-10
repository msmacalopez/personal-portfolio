import React from "react";
import mongodb from "../assets/skills/mongodb_logo.png";
import nextjs from "../assets/skills/nextjs_logo.png";
import nodejs from "../assets/skills/nodejs_logo.png";

const totalSkills = 7;
const degrees = Array.from(
  { length: totalSkills },
  (_, index) => (360 / totalSkills) * index
);

export default function Skills() {
  return (
    <div id="skills" className="section skills">
      <div className="carousel">
        {/* HTML */}
        <div className="talent" style={{ "--position": `${degrees[0]}deg` }}>
          <i className="fa-brands fa-html5" style={{ color: "#E34C26" }}></i>
        </div>
        {/* CSS */}
        <div className="talent" style={{ "--position": `${degrees[1]}deg` }}>
          <i className="fa-brands fa-css3-alt" style={{ color: "#1572B6" }}></i>
        </div>

        {/* JS */}
        <div className="talent" style={{ "--position": `${degrees[2]}deg` }}>
          <i className="fa-brands fa-js" style={{ color: "#F0DB4F" }}></i>
        </div>

        {/* React */}
        <div className="talent" style={{ "--position": `${degrees[3]}deg` }}>
          <i className="fa-brands fa-react" style={{ color: "#61DBFB" }}></i>
        </div>
        {/* Node */}
        <div className="talent" style={{ "--position": `${degrees[4]}deg` }}>
          <img className="logo d-block" src={nodejs} alt="NodeJS Logo" />
        </div>
        {/* NextJs */}
        <div className="talent" style={{ "--position": `${degrees[5]}deg` }}>
          <img className="logo d-block" src={nextjs} alt="NextJS Logo" />
        </div>

        {/* Mongo DB */}
        <div className="talent" style={{ "--position": `${degrees[6]}deg` }}>
          <img className="logo d-block" src={mongodb} alt="MongoDB Logo" />
        </div>
      </div>
    </div>
  );
}
