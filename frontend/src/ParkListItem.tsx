import React from "react";
import { ParkingDataItem } from "./types";

const ParkListItem = ({parkingDataItem}: { parkingDataItem: ParkingDataItem}) => {
    return (
        <div className="parkListItem">
            <img src="./icons/parking-location-icon.svg" />
            <span className="name">{parkingDataItem.name}</span>
            <span className="spaces">{parkingDataItem.spacesAvailable}/{parkingDataItem.maxCapacity}</span>
        </div>
    );
};

export default ParkListItem;