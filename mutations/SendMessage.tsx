import { useQuery, gql, useMutation } from '@apollo/client';
import {View, Text, ScrollView, Button, StyleSheet} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../Colors';

//room (id: "fecdc462-781e-487c-b96e-7f079b92e04b"){
// room (id: $roomID){

 


export const SendMessage = ({ body, roomID, navigation }) => {

  const SEND_MESSAGE = gql`
  mutation sMess ($roomID: String!, $body: String!){
    sendMessage(body: $body, roomId: $roomID) {
      body
      id
      insertedAt
    user {
      id
      lastName
      firstName
      email
    }
    }
  }
`;

  console.log("roomID+body" + roomID + "  " + body);

  const [addTodo, { data }] = useMutation(SEND_MESSAGE);

  return (
    <View>
      <Button 
      title="SendMessage"
      onPress={() => addTodo({ variables: {roomID, body }})}
    />  
    </View>
  );
}

const styles = StyleSheet.create({
  roomButton: {
    backgroundColor: Colors.WHITE,
    padding: 15,
  
  },
  roomButtonText: {
    fontWeight: "bold",
  }
});






