import React from 'react';
import EarthQuakeModel from './models/EarthQuake';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="mapContainer">
        ...put Map Component here...
      </div>
      <div className="quakeContainer">
        <h1>Earthquakes from the past week:</h1>
        ...put Quakes Component here...
      </div>
    </div>
  );
}

export default App;
