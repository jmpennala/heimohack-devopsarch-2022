import React from "react";
import PropTypes, { number } from "prop-types";
import { LatLngTuple } from "leaflet";
import {
  TileLayer,
  MapContainer,
  Marker,
  Circle,
  Tooltip,
} from "react-leaflet";
import { ParkingDataItem } from "./types";
import { getColorByDataItem } from "./util";

const innerBounds = [
  [49.505, -2.09],
  [53.505, 2.09],
];
const outerBounds = [
  [50.505, -29.09],
  [52.505, 29.09],
];

const ouluLatLong: LatLngTuple = [65.01251024571452, 25.46799864033924];
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

type DataItem = {
  name: string;
  coords: LatLngTuple;
  color: string;
  available: number;
  capacity: number;
};

const ParkingMap = ({
  parkingData,
}: {
  parkingData: Array<ParkingDataItem>;
}) => {
  const data: Array<DataItem> = parkingData
    ?.filter((p) => p.lat && p.lon)
    .map((p) => ({
      name: p.name,
      coords: [p.lat, p.lon],
      color: getColorByDataItem(p),
      available: p.spacesAvailable,
      capacity: p.maxCapacity,
    }));

  return (
    <div id="map">
      <MapContainer center={ouluLatLong} zoom={13}>
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
          >
            <Tooltip sticky>
              {d.name} {d.available && `${d.available} / ${d.capacity}`}
            </Tooltip>
          </Circle>
        ))}
        <Marker position={ouluLatLong}></Marker>
      </MapContainer>
    </div>
  );
};

ParkingMap.propTypes = {
  parkingData: PropTypes.object,
};

export default ParkingMap;
