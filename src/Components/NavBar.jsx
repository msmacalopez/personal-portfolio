import React from "react";
import icon from "../assets/icon2.png";

export default function NavBar() {
  return (
    <div className="navbar">
      <div>
        <img className="icon_img" src={icon} alt="icon" />
        <h1>MacArEna lOpEz</h1>
      </div>
      <ul>
        <li>Hero</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
