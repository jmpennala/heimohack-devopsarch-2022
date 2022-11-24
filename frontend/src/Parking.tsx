import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ParkingDataContainer, ParkingDataItem } from "./types";

function Parking({ parkingData }: { parkingData: Array<ParkingDataItem> }) {
  return (
    <div>
      {parkingData &&
        parkingData.map((d: ParkingDataItem) => <div>{d.name}</div>)}
    </div>
  );
}

Parking.propTypes = {
  parkingData: PropTypes.object,
};

export default Parking;
