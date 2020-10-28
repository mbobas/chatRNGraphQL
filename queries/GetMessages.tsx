import { useQuery, gql } from '@apollo/client';
import {View, Text, ScrollView, Button, StyleSheet} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../Colors';

//room (id: "fecdc462-781e-487c-b96e-7f079b92e04b"){
// room (id: $roomID){

 


export const GetMessages = ({ roomID, navigation }) => {

  const GET_MESSAGES = gql`
  query roomMessages($roomID: String!) {
    room (id: $roomID){
      id
      messages {
        id
        body
        insertedAt
        user {
          id
          lastName
          firstName
          email
        }
      }
      name 
      user {
        id
      }
      
    }
  }
`;

  console.log("roomID" + roomID);

  const { loading, error, data } = useQuery(GET_MESSAGES, {
    variables: { roomID },
    pollInterval: 500,
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :( GetMessages {error}</Text>;

  console.log(data.room.messages.body);

  return data.room.messages.map(({ body, id }) => (
    <View key={id}>
         <TouchableOpacity style={styles.roomButton}
            onPress={()=> navigation.navigate('Home')}
         >
         <Text style={styles.roomButtonText}>{body}</Text>
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






