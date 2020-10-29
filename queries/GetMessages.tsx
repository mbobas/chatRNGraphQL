import { useQuery, gql } from '@apollo/client';
import {View, Text, ScrollView, Button, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
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

const renderMessege = ({ item }) => (
    <View key={item.id}>
        <TouchableOpacity style={styles.roomButton}>
          <Text style={styles.roomButtonText}>{item.body}</Text>
         </TouchableOpacity>
    </View>
);

export const GetMessages = ({ roomID, navigation }) => {
  const { loading, error, data } = useQuery(GET_MESSAGES, {
    variables: { roomID },
    pollInterval: 500,
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :( GetMessages {error}</Text>;

    return (
      <View style={styles.container}>
          <FlatList
        data={data.room.messages}
        renderItem={renderMessege}
        keyExtractor={item => item.id}
      />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    //marginTop: StatusBar.currentHeight || 0,
  },
  roomButton: {
    backgroundColor: Colors.WHITE,
    padding: 15,
  
  },
  roomButtonText: {
    fontWeight: "bold",
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});






