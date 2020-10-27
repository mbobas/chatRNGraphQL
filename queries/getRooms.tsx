import { useQuery, gql } from '@apollo/client';
import {View, Text, ScrollView} from 'react-native';
import React from 'react';

const GET_ROOMS = gql`
  query getRooms {
    usersRooms {
      rooms {
        name
      }
    }
  }
`;

export  const GetRooms = () => {
  const { loading, error, data } = useQuery(GET_ROOMS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :( GetRooms</Text>;

  return data.usersRooms.map(({ rooms }) => (
    <View key={rooms.name}>
      <Text>
        {rooms}: {rooms.name}
      </Text>
    </View>
  ));
}












// import {gql} from '@apollo/client';
// import { ApolloClient, InMemoryCache } from '@apollo/client';

// export const client = new ApolloClient({
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
//   cache: new InMemoryCache()
// });

// export const getClient = client
//   .query({
//     query: gql`
//       query getRooms {
//         usersRooms {
//           user {
//             email
//             firstName
//             lastName
//             id
//             role
//           }
//           rooms {
//             name
//           }
//         }
//       }


//     `
//   })
//   .then(result => console.log(result));

// // export const GET_ROOMS = gql`
// // {
// //     usersRooms {
// //       user {
// //         email
// //         firstName
// //         lastName
// //         id
// //         role
// //       }
// //       rooms {
// //         name
// //       }
// //     }
// //   }
// // `;