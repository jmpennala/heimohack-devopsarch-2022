import React, { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";

type ParkingData = {
  name:string
}

type ParkingFetchResponse = Array<ParkingData>

function Parking() {
  const { isLoading, error, data } = useFetch<ParkingFetchResponse>(
    "http://localhost:3001/api/parking"
  );

  if (isLoading) {
    return <div>loading parking data</div>;
  }
  if (error) {
    return <div>{error.message}</div>
  }

  return <div>{data && data.map((d) => <div>{d.name}</div>)}</div>;
};

export default Parking;
