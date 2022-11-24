import React from "react";
import { ParkingDataItem } from "./types";

const ParkListItem = ({parkingDataItem}: { parkingDataItem: ParkingDataItem}) => {
    let spaces = "?/?";

    if(parkingDataItem.spacesAvailable) {
        spaces = parkingDataItem.spacesAvailable.toString() + " / ";
    }

    if(parkingDataItem.maxCapacity) {
        spaces += parkingDataItem.maxCapacity.toString();
    } else {
        spaces += "?"
    }

    return (
        <div className="parkListItem">
            <img src="./icons/parking-location-icon.svg" />
            <span className="name">{parkingDataItem.name}</span>
            <span className="spaces">{spaces}</span>
        </div>
    );
};

export default ParkListItem;