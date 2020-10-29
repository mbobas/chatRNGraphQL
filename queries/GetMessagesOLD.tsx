import { useQuery, gql } from '@apollo/client';
import {View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../Colors';

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

export const GetMessages = ({ roomID, navigation }) => {
  const { loading, error, data } = useQuery(GET_MESSAGES, {
    variables: { roomID },
    pollInterval: 500,
  });
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :( with loading GetMessages {error}</Text>;

  const mainUserID = data.room.user.id; 

  const renderMessege = ({ item }) => {
      if (item.user.id === mainUserID) {
      return(
        <View style={styles.containerMessageMainUser} key={item.id}>
            <TouchableOpacity style={styles.messageMainUser}>
              <Text style={styles.messageText}>{item.body}</Text>
              <Text>{item.user.firstName}</Text>
            </TouchableOpacity>
        </View>
      )
      } else {
        return(
          <View style={styles.containerMessageMainUser} key={item.id}>
            <TouchableOpacity style={styles.messageDiffUser}>
              <Text style={styles.messageText}>{item.body}</Text>
              <Text>{item.user.firstName}</Text>
            </TouchableOpacity>
        </View>
        )
      }
      };

    return (
      <View style={styles.container}>
          
        <FlatList
        data={data.room.messages}
        renderItem={renderMessege}
        inverted={true}
        keyExtractor={item => item.id}
      />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    
  },
  messageMainUser: {
    backgroundColor: Colors.LIGHT_BLUE,
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor: 'yellow',
    borderWidth: 1,
    //marginLeft: 40,
    alignContent: "flex-end",
    //justifyContent: "flex-end"
  },
  messageDiffUser: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    //marginRight: 10,
    //justifyContent: "flex-start"
  },
  messageText: {
    fontWeight: "bold",
    color: Colors.WHITE,
    borderColor: 'green',
    borderWidth: 1,
    alignContent: "flex-end",
    
  },
  title: {
    fontSize: 32,
  },
  containerMessageMainUser: {
    alignContent: "flex-end",
    //justifyContent: "flex-end",
    borderColor: 'red',
    borderWidth: 1,
    marginTop: 10,
  }
});






