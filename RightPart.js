import React from 'react';
import './RightPart.css'; // Import your right part styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import image1 from './images/image1.jpg'; // Import the image
import image2 from './images/image2.jpg'; // Import the image
import image3 from './images/image3.jpg'; // Import the image
import image4 from './images/image4.jpg'; // Import the image

const RightPart = () => {
  const profilePics = [
    image1,
    image2,
    image3,
    image4,
  ];


  return (
    <div className="right-part">
      <div className="upper-box">
        <h2>Active Members</h2>
        <div className="profile-pics">
          {profilePics.map((pic, index) => (
            <img
              key={index}
              src={pic}
              alt={`Profile ${index}`}
              className="profile-pic"
            />
          ))}
        </div>
        <div className="view-all">
          <FontAwesomeIcon icon={faCompass} />
          <span>View All</span>
        </div>
      </div>
      <div className="custom-box">
        <h2>Topics</h2>
        <div className="topics-profile-pics">
          {profilePics.map((pic, index) => (
            <img
              key={index}
              src={pic}
              alt={`Profile ${index}`}
              className="profile-pic"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightPart;
