import React from 'react';
import Map from './components/Map';
import Quakes from './components/Quakes';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="mapContainer">
        <Map />
      </div>
      <div className="quakeContainer">
        <h1>Earthquakes from the past week:</h1>
        <Quakes />
      </div>
    </div>
  );
}

export default App;