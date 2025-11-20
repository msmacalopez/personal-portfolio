import React from "react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <div id="hero" className="section hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h3 className="h3-hero">I Code...</h3>
        <h1 className="h1-hero">Macarena Lopez</h1>
        <h2 className="h2-hero">
          Junior Front-end Developer | Aspiring FullStack
        </h2>
      </div>
    </div>
  );
}
