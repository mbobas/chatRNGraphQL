import {gql} from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

export const getClient = client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

export const GET_ROOMS = gql`
{
    usersRooms {
      user {
        email
        firstName
        lastName
        id
        role
      }
      rooms {
        name
      }
    }
  }
`;