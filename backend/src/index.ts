import express, {Request, Response} from "express"
import cors from "cors"
import { ApiClient } from "./apiClient";
import { ParkingResponse } from "./parking-response";
import { Scheduler } from "./scheduler";
import { ParkingRepository } from "./database";
import { inherits } from "util";

const app = express();

const parkingRepo = new ParkingRepository() 

// enable all cors request
app.use(cors());

app.get("/api/parking", async (_: Request, res: Response) => {
  let data: Array<ParkingResponse> = [];
  /* await ApiClient().then(response => data = response)
  .catch(reason => console.log(reason))
  .finally(() => "DONE");
   */

  data = await parkingRepo.findAll()
  res.json(data);
});

function init() {
  let data: Array<ParkingResponse> = [];
  ApiClient().then(response => parkingRepo.save(response))
  .catch(reason => console.log(reason))
  .finally(() => "DONE");
}

const PORT = 3001;
app.listen(PORT, () => {
  
  init();
  const scheduler = new Scheduler(parkingRepo);
  console.log(`Server running in port ${PORT}`);
});
