import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-content">
        <p>About Me</p>
          <ul>
            <li>
              <a href="https://github.com/pa-dg" target="_blank" rel="noopener noreferrer">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/patricia-deguzman/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href="https://angel.co/u/patricia-andrea-de-guzman" target="_blank" rel="noopener noreferrer">Angel List</a>
            </li>
            <li>
              <a href="mailto:padgzmn@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </li>
          </ul>
      </div>

      <div className="footer-content">
        <p>Technologies Used</p>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Rails</li>
          <li>PostgreSQL</li>
        </ul>
      </div>

      <div className="footer-content">
        <p>Made with <img src={window.thunderIcon} alt="thunder-icon" width={14} /></p>
        <p>by Andrea de Guzman</p>
      </div>
    </>
  );
};

export default Footer;
