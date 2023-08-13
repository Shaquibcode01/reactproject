import React from 'react';
import './LongBox.css'; // Import your LongBox styles

const LongBox = () => {
  return (
    <div className="long-box-wrapper">
     <div className="long-box">
      <div className="long-box-header">
        <h2 className="all-groups-title">All Groups</h2>
      </div>
      <div className="long-box-body">
        <div className="search-engine">
          
          <input type="text" placeholder="Last Active..." />
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default LongBox;
