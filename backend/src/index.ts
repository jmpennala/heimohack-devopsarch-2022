import express, {Request, Response} from "express"
import cors from "cors"

const app = express();

// enable all cors request
app.use(cors());

let somedata = [
  {
    carParkId: "61",
    name: "Kivisydän",
    lat: 65.01470741,
    lon: 25.46510463,
    maxCapacity: 753,
    spacesAvailable: 409,
  },
  {
    carParkId: "5",
    name: "Autosaari",
    lat: 65.01088904,
    lon: 25.4732754,
    maxCapacity: 200,
    spacesAvailable: 39,
  },
  {
    carParkId: "4",
    name: "Autoheikki",
    lat: 65.01498236,
    lon: 25.47918373,
    maxCapacity: 95,
    spacesAvailable: 63,
  },
  {
    carParkId: "100",
    name: "Torinranta",
    lat: 65.01474128,
    lon: 25.46626395,
    maxCapacity: null,
    spacesAvailable: null,
  },
  {
    carParkId: "7",
    name: "Medipark",
    lat: 65.00987539,
    lon: 25.51894066,
    maxCapacity: 210,
    spacesAvailable: 0,
  },
  {
    carParkId: "11",
    name: "Sairaalaparkki",
    lat: 65.00900919,
    lon: 25.51300372,
    maxCapacity: 102,
    spacesAvailable: 64,
  },
  {
    carParkId: "3",
    name: "Pekuri",
    lat: 65.01172727,
    lon: 25.46764256,
    maxCapacity: 213,
    spacesAvailable: 195,
  },
  {
    carParkId: "12",
    name: "EtelainenPAlue",
    lat: null,
    lon: null,
    maxCapacity: 0,
    spacesAvailable: 0,
  },
  {
    carParkId: "10",
    name: "Valkea",
    lat: 65.01073984,
    lon: 25.47141987,
    maxCapacity: 63,
    spacesAvailable: 19,
  },
];

type ParkingResponse = {
  carParkId: string;
  lat: number;
  lon: number;
  maxCapacity: number;
  spacesAvailable: number;
}

app.get("/api/parking", (_: Request, res: Response) => {
  res.json(somedata);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
