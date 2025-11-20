import React from "react";
import "../styles/hero.css";
import videobg from "../assets/cosmo.mp4";

export default function Hero() {
  return (
    <div id="hero" className="section hero">
      {/* to add picture in CSS */}
      {/* <div className="hero-bg"></div>  */}
      <video
        src={videobg}
        className="bg-video"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="hero-content">
        <h3 className="h3-hero">I Code...</h3>
        <h1 className="h1-hero">Macarena Lopez</h1>
        <h2 className="h2-hero">Full Stack Developer | IT Graduated</h2>
      </div>
    </div>
  );
}
