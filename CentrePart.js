import React from 'react';
import './CentrePart.css'; // Import your centre part styles;

const CentrePart = () => {
  return (
    <div className="centre-part-wrapper">
     <div className="centre-part">
      <div className="search-groups">
      
        <h2>Search Groups</h2>
        <div className="search-engine">
          <input type="text" placeholder="Search Groups" />
          <button className="search-button">Search</button>
        </div>
      </div>
      {/* Add more content for the Centre Part */}
    </div>
    </div>
  );
}

export default CentrePart;
