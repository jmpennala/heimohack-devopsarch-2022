import React, { useEffect, useState } from "react";
import Parking from "./Parking";
import ParkingMap from "./ParkingMap";
import useFetch from "react-fetch-hook";
import { ParkingDataContainer } from "./types";

import "./App.css";

const convertData = () => {};

/**
 *
 * {"carParkId":"103","name":"Raksilan Marketit","lat":65.01125565,"lon":25.49191761,"maxCapacity":null,"spacesAvailable":null}
 *
 */

function filterData(data?: ParkingDataContainer): ParkingDataContainer {
  return data?.filter((d) => d.carParkId !== "61") as ParkingDataContainer;
}

function App() {
  const f = { b: true };

  const { isLoading, error, data } = useFetch<ParkingDataContainer>(
    "http://localhost:3001/api/parking"
  );
  const [dataStore, setDataStore] = useState<ParkingDataContainer>([]);

  useEffect(() => setDataStore(filterData(data)), [data]);
  return (
    <div className="App">
      <Parking parkingData={dataStore as ParkingDataContainer} />
      <ParkingMap parkingData={data as ParkingDataContainer} />
    </div>
  );
}

export default App;
