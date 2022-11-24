export type ParkingDataItem = {
    carParkId: string;
    name: string;
    lat: number;
    lon: number;
    maxCapacity: number;
    spacesAvailable: number;
    dateModified: Date;
  }

export type ParkingDataContainer = Array<ParkingDataItem>;