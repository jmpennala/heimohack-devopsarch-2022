import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ParkingDataContainer, ParkingDataItem } from "./types";
import ParkListItem from "./ParkListItem";

function Parking({ parkingData }: { parkingData: Array<ParkingDataItem> }) {
  return (
    <div>
      {parkingData &&
        parkingData.map((parkingDataItem: ParkingDataItem) => ParkListItem({parkingDataItem}))}
    </div>
  );
}

Parking.propTypes = {
  parkingData: PropTypes.object,
};

export default Parking;
