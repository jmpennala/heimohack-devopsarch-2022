import React from "react";
import { ParkingDataItem } from "./types";
import { getColorByDataItem } from "./util";

const ParkListItem = ({parkingDataItem}: { parkingDataItem: ParkingDataItem}) => {
    let spaces = "?";

    if(parkingDataItem.spacesAvailable) {
        spaces = parkingDataItem.spacesAvailable.toString();
    }

    let color = getColorByDataItem(parkingDataItem);
    let itemClass = "spaces " + color.toString();
    
    return (
        <div className="parkListItem">
            <img src="./icons/parking-location-icon.svg" />
            <span className="name">{parkingDataItem.name}</span>
            <span className={itemClass}>{spaces}</span>
        </div>
    );
};

export default ParkListItem;