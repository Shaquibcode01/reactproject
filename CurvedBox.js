import React from 'react';
import './CurvedBox.css';

function CurvedBox({ boxNumber, title, description }) {
  return (
    <div className={`curved-box box${boxNumber}`}>
      <div className="upper-section">
     
      </div>
      <div className="middle-section">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="join-group">Join Group</div> {/* Add Join Group */}
      </div>
      <div className="bottom-section">
        <p>Public Group/1 member</p>
      </div>
    </div>
  );
}

export default CurvedBox;
