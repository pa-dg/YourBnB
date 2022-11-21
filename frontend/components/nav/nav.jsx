import React from 'react';
import { Link } from 'react-router-dom';
import DropDownContainer from './dropdown';
import { FaAirbnb, FaGithub, FaLinkedin, FaAngellist, FaFolderOpen } from 'react-icons/fa';
import SearchFormContainer from '../search/searchFormContainer';

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

      <SearchFormContainer />

      <div className="right-nav">
        <div className="social-link-container">
          <a className="social-link" href="https://github.com/pa-dg" target="_blank" rel="noopener noreferrer" title="Github">
            <FaGithub size={styles.socials.size} style={styles.socials} />
          </a>

          <a className="social-link" href="https://www.linkedin.com/in/patricia-deguzman/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin size={styles.socials.size} style={styles.socials} />
          </a>

          <a className="social-link" href="https://www.padg.dev/" target="_blank" rel="noopener noreferrer" title="Portfolio">
            <FaFolderOpen size={styles.socials.size} style={styles.socials} />
          </a>

          <a className="social-link" href="https://angel.co/u/patricia-andrea-de-guzman" target="_blank" rel="noopener noreferrer" title="AngelList">
            <FaAngellist size={styles.socials.size} />
          </a>

        </div>
          <DropDownContainer/>
      </div>
    </div>

  )
};

export default Nav;



