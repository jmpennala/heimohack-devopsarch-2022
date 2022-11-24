import React from "react";
import PropTypes from "prop-types";
import { LatLngTuple } from "leaflet";
import { TileLayer, MapContainer, Marker, Circle } from "react-leaflet";
import { ParkingDataItem } from "./types";

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

type ParkingData = [
  {
    lat: number;
    lon: number;
  }
];

const ParkingMap = ({
  parkingData,
}: {
  parkingData: Array<ParkingDataItem>;
}) => {
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

ParkingMap.propTypes = {
  parkingData: PropTypes.object,
};

export default ParkingMap;
