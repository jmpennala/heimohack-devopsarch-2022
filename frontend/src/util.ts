import { ParkingDataItem } from "./types";

export function getColorByDataItem(item: ParkingDataItem) {
    // green 25-100% free
    // yellow 10-24
    // red 0-9
    // gray unknown
  
    if (!item.spacesAvailable) return "gray";
  
    const percentageFree = (item.spacesAvailable / item.maxCapacity) * 100.0;
    if (percentageFree >= 25.0) {
      return "green";
    } else if (percentageFree >= 10.0) {
      return "yellow";
    }
  
    return "red";
}