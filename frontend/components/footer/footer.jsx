import React from "react";

const Footer = () => {
  return (
    <div id="footer-container">
      <div className="footer-content">
        <h2>About Me</h2>
          <ul>
            <li>
                <a href="https://github.com/pa-dg" target="_blank" rel="noopener noreferrer">Github</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/patricia-deguzman/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href="https://angel.co/" target="_blank" rel="noopener noreferrer">Angel List</a>
            </li>
            <li>
              <a href="mailto:padgzmn@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </li>
          </ul>
      </div>

      <div className="footer-content">
        <h2>Technologies Used</h2>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Rails</li>
          <li>PostgreSQL</li>
        </ul>
      </div>

      <div className="footer-content">
        <h2>Made with <img src={window.thunderIcon} alt="thunder-icon" /></h2>
        <h2>by Andrea de Guzman</h2>
      </div>
    </div>

  );
};

export default Footer;
