import { gql, useMutation } from '@apollo/client';
import {Text,  StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../Colors';

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

export const SendMessage = ({ roomID, navigation }) => {
  const [body, onChangeBody] = useState('');
  const [addTodo, { data }] = useMutation(SEND_MESSAGE);
 
  return (
    <KeyboardAvoidingView  
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}>
        <TextInput style={styles.textInput}
            placeholder="Type a message.."
            onChangeText={text => onChangeBody(text)}
            value={body}
        />
        <TouchableOpacity
        style={styles.sendButton} 
        onPress={() => {
          addTodo({ variables: {roomID, body }}) 
          onChangeBody("")
        }}>
        <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 10,
  },
  sendButton: {
    marginRight: 5,
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderColor: Colors.LIGHT_GREY, 
    borderTopWidth: 1
  },
  roomButtonText: {
    fontWeight: "bold",
  },
  textInput: {
    marginLeft: 5,
    flex: 6, 
    borderColor: Colors.LIGHT_GREY, 
    borderTopWidth: 1
  },
  sendButtonText: {
    fontWeight: "bold",
  }
});






