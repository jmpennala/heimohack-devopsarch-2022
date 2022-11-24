export type ParkingDataItem = {
    carParkId: string;
    name: string;
    lat: number;
    lon: number;
    maxCapacity: number;
    spacesAvailable: number;
  }

export type ParkingDataContainer = Array<ParkingDataItem>;