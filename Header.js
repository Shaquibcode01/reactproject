import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faGlobe, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import image1 from './images/image1.jpg';
const Header = () => {
  return (
    <header className="header">
      <div className="left-icons">
        <div className="anesta-logo">
          <span>Anesta.</span>
        </div>
        <div className="bars-icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
      </div>
      <div className="right-icons">
        <div className="language-selector">
          <FontAwesomeIcon icon={faGlobe} />
          <select>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
        <div className="message-icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="bell-icon">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="profile">
          <img src={image1} alt="Profile" className="profile-pic" />
          <span className="user-name">KHALIK</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
