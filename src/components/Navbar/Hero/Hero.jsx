import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building digital Experiences that Inspires</h2>
        <p>
          Dynamic Full Stack Developer and GDSC Management Lead with expertise
          in React.js, Node.js, and scalable web applications.
        </p>
      </div>

      <div className="hero-img">
        <div>
          {/* <div className="tect-icon">
            <img src="./assets/images/img10.jpg" alt="heroimage"></img>
          </div> */}
          <img src="./assets/images/img11.jpg" alt="heroimage"></img>
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/img02.png" alt="tech icon"></img>
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img03.png" alt="tech icon"></img>
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img04.png" alt="tech icon"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
