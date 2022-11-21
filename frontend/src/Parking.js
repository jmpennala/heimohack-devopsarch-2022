import React, { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";

const Parking = () => {
  const [parkingData, setParkingData] = useState([]);
  const { isLoading, error, data } = useFetch(
    "http://localhost:3001/api/parking"
  );

  if (isLoading) {
    return <div>loading parking data</div>;
  }

  return <div>{data && data.map((d) => <div>{d.name}</div>)}</div>;
};

export default Parking;
