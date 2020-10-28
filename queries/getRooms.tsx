import { useQuery, gql } from '@apollo/client';
import {View, Text, ScrollView, Button, StyleSheet} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../Colors';

const GET_ROOMS = gql`
  query getRooms {
    usersRooms {
      rooms {
        id
        name
      }
      user {
        id
        firstName
        lastName
        role
        
      }
    }
  }
`;

export const GetRooms = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_ROOMS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :( GetRooms</Text>;

  // console.log(data.usersRooms.rooms);
  // console.log(data.usersRooms.user);
  // console.log("imie usera" + data.usersRooms.user.firstName)
  // const userRoomName = () => {
  //   data.usersRooms.user.map(({ firstName }) => {
  //     console.log("Imie" + firstName);
  //   }
  // }
  // // do naprawy CreatedBy

  return data.usersRooms.rooms.map(({ id, name }) => (
    <View key={id}>
         <TouchableOpacity style={styles.roomButton}
            onPress={()=> navigation.navigate('Chat', {
              roomID: id,
              roomName: name,
              //roomUserName: userRoomName //nie działa do naprawy CreatedBy
            })}
         >
         <Text style={styles.roomButtonText}>{name}</Text>
         </TouchableOpacity>
    </View>
  ));
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  roomButton: {
    backgroundColor: Colors.WHITE,
    padding: 15,
  
  },
  roomButtonText: {
    fontWeight: "bold",
  }
});






