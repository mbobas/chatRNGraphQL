import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-community/async-storage';
import { useQuery, gql } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphiql',
  
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  //const token = AsyncStorage.getItem('token');
  //const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MDU1MjMxMTMsImlhdCI6MTYwMzEwMzkxMywiaXNzIjoiY2hhdGx5IiwianRpIjoiY2I2MDIwYjEtZGEyYy00MDQ4LWIwOWUtOTQ1NjQyM2EyMDIxIiwibmJmIjoxNjAzMTAzOTEyLCJzdWIiOiJmOGNiNmZiYi1hM2Q2LTQ3ZWItOGM0Yy03YjRlMGUwZjI2YjkiLCJ0eXAiOiJhY2Nlc3MifQ.XUHW8C8638MgdiGD8ikfuyd3RGOeJ9pE5rNjVS79GaHiPj__Hz5-zXO3iWBL9xQcZaL7fxa_xx8Oc5l7bXPjvg"      
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      //authorization: token ? `Bearer ${eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MDU1MjMxMTMsImlhdCI6MTYwMzEwMzkxMywiaXNzIjoiY2hhdGx5IiwianRpIjoiY2I2MDIwYjEtZGEyYy00MDQ4LWIwOWUtOTQ1NjQyM2EyMDIxIiwibmJmIjoxNjAzMTAzOTEyLCJzdWIiOiJmOGNiNmZiYi1hM2Q2LTQ3ZWItOGM0Yy03YjRlMGUwZjI2YjkiLCJ0eXAiOiJhY2Nlc3MifQ.XUHW8C8638MgdiGD8ikfuyd3RGOeJ9pE5rNjVS79GaHiPj__Hz5-zXO3iWBL9xQcZaL7fxa_xx8Oc5l7bXPjvg}` : "",
      authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MDU1MjMxMTMsImlhdCI6MTYwMzEwMzkxMywiaXNzIjoiY2hhdGx5IiwianRpIjoiY2I2MDIwYjEtZGEyYy00MDQ4LWIwOWUtOTQ1NjQyM2EyMDIxIiwibmJmIjoxNjAzMTAzOTEyLCJzdWIiOiJmOGNiNmZiYi1hM2Q2LTQ3ZWItOGM0Yy03YjRlMGUwZjI2YjkiLCJ0eXAiOiJhY2Nlc3MifQ.XUHW8C8638MgdiGD8ikfuyd3RGOeJ9pE5rNjVS79GaHiPj__Hz5-zXO3iWBL9xQcZaL7fxa_xx8Oc5l7bXPjvg`,
    }
  }
});

export const client = new ApolloClient({
  //uri: 'https://chat.thewidlarzgroup.com/api/graphiql',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});



export const getClient = client
  .query({
    query: gql`
      query getRooms {
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


    `
  })
  .then(result => console.log(result));