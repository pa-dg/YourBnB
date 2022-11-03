import React from 'react';
import { Link } from 'react-router-dom';
import DropDownContainer from './dropdown';
import { FaAirbnb, FaGithub, FaLinkedin, FaAngellist, FaFolderOpen } from 'react-icons/fa';

const Nav = () => {
  const styles = {
    socials: {
      size: 25,
      paddingRight: 10,
    },
    airbnbLogo: {
      size: 30,
      paddingRight: 5,
    }
  }
  
  return (
    <div className='nav-header'>

      <div className="splash-page-link-container">
        <Link to="/">
          <div id="airbnb-logo">
            <FaAirbnb size={styles.airbnbLogo.size} style={styles.airbnbLogo} />
          </div>
          <div id="yourbnb-text">
            yourbnb
          </div>
        </Link>
      </div>

      <div className="search-bar-container">
            <div className="search-input">
              <label htmlFor="search-input">
                <input 
                  type="text" 
                  placeholder=' Start Searching (New York..)'
                />
              </label>
              
            </div>
            <div className="search-button">
              <i className="fas fa-search fa-1x"></i>
            </div>
      </div>

      <div className="right-nav">
        <div className="social-link-container">
          <a className="social-link" href="https://github.com/pa-dg" target="_blank" rel="noopener noreferrer">
            <FaGithub size={styles.socials.size} style={styles.socials} />
          </a>
          <a className="social-link" href="https://www.linkedin.com/in/patricia-deguzman/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={styles.socials.size} style={styles.socials} />
          </a>
          <a className="social-link" href="https://angel.co/u/patricia-andrea-de-guzman" target="_blank" rel="noopener noreferrer">
            <FaAngellist size={styles.socials.size} style={styles.socials} />
          </a>
          <a className="social-link" href="mailto:padgzmn@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaFolderOpen size={styles.socials.size} />
          </a>
        </div>
          <DropDownContainer/>
      </div>
    </div>

  )
};

export default Nav;



