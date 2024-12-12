import React from 'react';
import {NavLink} from 'react-router-dom';

const About = () => {
  return (
    <section className="about-section py-5 bg-light" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="about.png"
              alt="About Me"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">About Me</h2>
            <p>
              Hello! I'm an SAP CPI Consultant with expertise in integration, middleware technologies, and business process automation. 
              I specialize in designing scalable and efficient integration solutions to streamline business workflows.
            </p>
            <p>
              With a passion for technology and problem-solving, I thrive on finding creative ways to tackle complex integration challenges. 
              Let's connect to discuss how I can help your organization achieve seamless connectivity.
            </p>
            <NavLink  to="/contact" className="btn btn-primary mt-3">
              Get in Touch
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
