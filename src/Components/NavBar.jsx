import React from "react";
import icon from "../assets/icon2.png";

export default function NavBar() {
  return (
    <div id="navbar" className="navbar">
      <div>
        <img className="icon_img" src={icon} alt="icon" />
        <h1>MacArEna lOpEz</h1>
      </div>
      <ul>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
