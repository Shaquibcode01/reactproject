import React from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import RightPart from './RightPart';
import CurvedBox from './CurvedBox';
import CentrePart from './CentrePart';
import LongBox from './LongBox'; // Import LongBox component

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content vertical-container">
      <Navigation />
      <RightPart/>
        <div className="vertical-container">
          <CentrePart />
          <LongBox />
          <div className="horizontal-container">
            <CurvedBox
              boxNumber={1}
              title="Designer Group 1"
              description="1 hours ago"
            />
            <CurvedBox
              boxNumber={2}
              title="Business Group"
              description="2 days ago"
            />
            <CurvedBox
              boxNumber={3}
              title="Art Photographers"
              description="3 days ago"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
