import React from "react";
import mongodb from "../assets/mongodb_logo.png";
import nextjs from "../assets/nextjs_logo.png";
import nodejs from "../assets/nodejs_logo.png";

export default function Skills() {
  return (
    <div
      id="skills"
      className="section skills d-flex justify-content-center align-items-center flex-wrap align-content-center gap-2"
    >
      {/* HTML */}
      <i className="fa-brands fa-html5" style={{ color: "#E34C26" }}></i>
      {/* CSS */}
      <i className="fa-brands fa-css3-alt" style={{ color: "#1572B6" }}></i>
      {/* JS */}
      <i className="fa-brands fa-js" style={{ color: "#F0DB4F" }}></i>
      {/* React */}
      <i className="fa-brands fa-react" style={{ color: "#61DBFB" }}></i>
      {/* Node */}
      <img className="logo d-block" src={nodejs} alt="MongoDB Logo" />
      {/* NextJs */}
      <img className="logo d-block" src={nextjs} alt="MongoDB Logo" />
      {/* Mongo DB */}
      <img className="logo d-block" src={mongodb} alt="MongoDB Logo" />
    </div>
  );
}
