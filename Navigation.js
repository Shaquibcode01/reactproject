import React from 'react';
import './Navigation.css'; // Import your navigation styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUsers,
  faClipboard,
  faPaperPlane,
  faEnvelopeOpenText,
  faUser,
  faUserGroup,
  faComments,
  faCalendar,
  faCopy,
  faStar,
  faLightbulb,
  faSoap,
  faFileAlt,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li><FontAwesomeIcon icon={faHome} /> Home</li>
        <li><FontAwesomeIcon icon={faUsers} /> Community</li>
        <li><FontAwesomeIcon icon={faClipboard} /> Knowledge Base</li>
        <li><FontAwesomeIcon icon={faPaperPlane} /> Activity</li>
        <li><FontAwesomeIcon icon={faEnvelopeOpenText} /> Messages</li>
        <li><FontAwesomeIcon icon={faUser} /> Members</li>
        <li><FontAwesomeIcon icon={faUserGroup} /> Groups</li>
        <li><FontAwesomeIcon icon={faComments} /> Forums</li>
        <li><FontAwesomeIcon icon={faCalendar} /> Events</li>
        <li><FontAwesomeIcon icon={faCopy} /> Documents</li>
        <li><span className="category-title">E-learning</span></li>
        <li><FontAwesomeIcon icon={faStar} /> All Courses</li>
        <li><FontAwesomeIcon icon={faLightbulb} /> Course Single</li>
        <li><FontAwesomeIcon icon={faSoap} /> Topic Single</li>
        <li><span className="category-title">WP JOB MANAGER</span></li>
        <li><FontAwesomeIcon icon={faFileAlt} /> Import All</li>
        <li><FontAwesomeIcon icon={faBriefcase} /> Job Listings</li>
      </ul>
    </nav>
  );
}

export default Navigation;
