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

function getColorByDataItem(item: ParkingDataItem) {
  // green 25-100% free
  // yellow 10-24
  // red 0-9
  const percentageFree = (item.spacesAvailable / item.maxCapacity) * 100.0;
  if (percentageFree >= 25.0) {
    return "green";
  } else if (percentageFree >= 10.0) {
    return "yellow";
  }

  return "red";
}

type DataItem = {
  coords: LatLngTuple;
  color: string;
};

const ParkingMap = ({
  parkingData,
}: {
  parkingData: Array<ParkingDataItem>;
}) => {
  const data: Array<DataItem> = parkingData
    ?.filter((p) => p.lat && p.lon)
    .map((p) => ({ coords: [p.lat, p.lon], color: getColorByDataItem(p) }));

  return (
    <div id="map">
      <MapContainer center={[65.012615, 25.471453]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data?.map((d) => (
          <Circle
            center={d.coords}
            pathOptions={{
              fillColor: d.color,
              opacity: 1.0,
              fillOpacity: 0.4,
            }}
            radius={80}
          />
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
