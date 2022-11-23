import {gql, GraphQLClient} from "graphql-request";
import { ParkingResponse } from "./parking-response";

const openApiUrl = "https://api.oulunliikenne.fi/proxy/graphql";

const client = new GraphQLClient(openApiUrl);

export const ApiClient  = async (): Promise<ParkingResponse[]> => {

    const getAllCarParks = gql`query GetAllCarParks {
        carParks {
          carParkId
          name
          lat
          lon
          maxCapacity
          spacesAvailable
        }
      }`;
      const response: Array<ParkingResponse> = [];
       await client.request(getAllCarParks).then(result => 
        {
            result.carParks.forEach((element: ParkingResponse) => {
                response.push(element);    
            });
        }
        )
        .catch(reason => console.error(reason))
        .finally(() => console.log("GrapghQL request is DONE"));
      return response;
}
