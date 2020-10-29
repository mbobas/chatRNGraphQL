import { useQuery, gql } from '@apollo/client';
import {View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../Colors';
import { Item } from 'native-base';

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
    const tagName = item.user.firstName.slice(0,1);
    const tagname2 = item.user.lastName.slice(0,1);
    const tagName3 = tagName.concat(tagname2);
      if (item.user.id === mainUserID) {
        return(
              <TouchableOpacity style={styles.messageMainUser} key={item.id}>
                <View style={styles.circleName}><Text style={styles.cicleNametext}>{tagName3}</Text></View>
                <Text style={styles.messageTextMainUser}>{item.body}</Text>
                <Text style={styles.nameAndDate}>{item.user.firstName} {item.insertedAt}</Text>
              </TouchableOpacity>
      )
      } else {
        return(
            <TouchableOpacity style={styles.messageDiffUser}>
              <View style={styles.circleNameDiff}><Text style={styles.cicleNametextDiff}>{tagName3}</Text></View>
              <Text style={styles.messageTextDiffUser}>{item.body}</Text>
              <Text style={styles.nameAndDateDiff}>{item.user.firstName} {item.insertedAt}</Text>
            </TouchableOpacity>
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
        showsVerticalScrollIndicator={false}
      />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
  },
  messageMainUser: {
    margin: 10,
    marginLeft: 40,
    backgroundColor: Colors.LIGHT_BLUE,
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: "column",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  messageDiffUser: {
    margin: 10,
    marginRight: 40,
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "column",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  messageTextMainUser: {
    fontWeight: '700',
    color: Colors.WHITE,
    alignSelf: "flex-end",
  },
  messageTextDiffUser: {
    fontWeight: '700',
    color: Colors.BLACK,
    alignSelf: "flex-start",
  },
  nameAndDate : {
    fontSize: 8,
    fontWeight: '600',
    color: Colors.LIGHT_GREY,
    alignSelf: "flex-end",
  },
  nameAndDateDiff : {
    fontSize: 8,
    fontWeight: '600',
    color: Colors.LIGHT_GREY,
    alignSelf: "flex-start",
  },
  circleName: {
    width: 30,
    height: 30,
    lineHeight: 5,
    borderRadius: 50,
    backgroundColor: Colors.ANDROID_GREEN,
    justifyContent: "center",
  },
  cicleNametext: {
    alignSelf: "center",
    fontSize: 10,
    color: Colors.WHITE,
  },
  circleNameDiff: {
    width: 30,
    height: 30,
    lineHeight: 5,
    borderRadius: 50,
    backgroundColor: Colors.BRIGHT_MARON,
    justifyContent: "center",
    alignSelf: "flex-end"
  },
  cicleNametextDiff: {
    alignSelf: "center",
    fontSize: 10,
    color: Colors.WHITE,
  }
});






