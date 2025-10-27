import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="section contact">
      <div className="card-container">
        <div className="card-contact">
          <div className="card-front">
            <p style={{ fontWeight: "bolder" }}>Macarena Lopez</p>
            <p>Junior Front-End Developer</p>
          </div>
          <div className="card-back">
            <p>contact_msmaca@gmail.com</p>
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
      </div>
    </div>
  );
}
