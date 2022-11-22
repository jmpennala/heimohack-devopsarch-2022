import React from "react";
import Parking from "./Parking";
import ParkingMap from "./ParkingMap";

import "./App.css";

function App() {
  const f = { b: true };

  return (
    <div className="App">
      <Parking />
      <ParkingMap />
    </div>
  );
}

export default App;
