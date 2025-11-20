import React, { useRef } from "react";
import "../styles/contact.css";
import swooshSound from "../assets/swoosh.mp3";

export default function Contact() {
  const audioRef = useRef(null);

  const handleHover = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // restart sound if replayed quickly
      audioRef.current.play();
    }
  };
  return (
    <div id="contact" className="section contact">
      <div className="card-container">
        <div
          className="card-contact"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div className="card-front">
            <p style={{ fontWeight: "bolder", fontSize: "2.2rem" }}>
              Macarena Lopez
            </p>
            <p>Full Stack Developer</p>
          </div>
          <div className="card-back">
            <p>Click to Email</p>
            <p>
              <a href="https://github.com/msmacalopez" target="_blank">
                GitHub
              </a>
            </p>

            <p>
              <a
                href="https://www.linkedin.com/in/msmacarenalopez/"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <audio ref={audioRef} src={swooshSound} preload="auto" />
      </div>
    </div>
  );
}
