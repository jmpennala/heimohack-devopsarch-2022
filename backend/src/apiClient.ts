import {gql, GraphQLClient} from "graphql-request";

const openApiUrl = "https://api.oulunliikenne.fi/proxy/graphql";

const client = new GraphQLClient(openApiUrl);

export const ApiClient  = async () => {

    const query = gql`query GetAllCarParks {
        carParks {
          carParkId
          name
          lat
          lon
          maxCapacity
          spacesAvailable
        }
      }`;
    
    
      const request = client.request(query);
      console.log(request);
}
