import express, {Request, Response} from "express"
import cors from "cors"
import { ApiClient } from "./apiClient";
import { ParkingResponse } from "./parking-response";
import { Scheduler } from "./scheduler";

const app = express();

// enable all cors request
app.use(cors());

app.get("/api/parking", async (_: Request, res: Response) => {
  let data: Array<ParkingResponse> = [];
  await ApiClient().then(response => data = response)
  .catch(reason => console.log(reason))
  .finally(() => "DONE");
  res.json(data);
});

const PORT = 3001;
app.listen(PORT, () => {
  const scheduler = new Scheduler();
  console.log(`Server running in port ${PORT}`);
});
