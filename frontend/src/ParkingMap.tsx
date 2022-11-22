import React from "react";
import { LatLngTuple } from "leaflet";
import { TileLayer, MapContainer, Marker, Circle } from "react-leaflet";

const innerBounds = [
  [49.505, -2.09],
  [53.505, 2.09],
];
const outerBounds = [
  [50.505, -29.09],
  [52.505, 29.09],
];

const ouluLatLong: LatLngTuple = [65.012615, 25.471453];
const fillBlueOptions = { fillColor: "blue" };

const circleData: Array<LatLngTuple> = [
  [65.012615, 25.471453],
  [65.002615, 25.471453],
];

const ParkingMap = () => {
  return (
    <div id="map">
      <MapContainer center={[65.012615, 25.471453]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {circleData.map((d) => (
          <Circle center={d} pathOptions={fillBlueOptions} radius={200} />
        ))}
        <Marker position={[65.012615, 25.471453]}></Marker>
      </MapContainer>
    </div>
  );
};

export default ParkingMap;
