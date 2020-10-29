import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Messages } from '../components/Messages';
import { Colors } from '../Colors';
import { SendMessage } from '../components/SendMessage';

export default function Chat({ route, navigation }) {
    const { roomID, roomName } = route.params;
    
    return (
      <View style={styles.container}>
        <Text style={styles.titleOfRoom}>{roomName}</Text>
        <Text style={styles.autorOf}>Created by Michal Gulczynski</Text>
        <Messages roomID={roomID} navigation={navigation}/>
        <SendMessage roomID={roomID} navigation={navigation}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: Colors.WHITE,
    },
    roomButton: {
      backgroundColor: Colors.WHITE,
      padding: 15,
      
    },
    roomButtonText: {
      fontWeight: "bold",
    },
    titleOfRoom: {
      //flex:1,
      padding: 10,
      paddingBottom: 0,
      fontSize: 16,
      fontWeight: "bold",
    },
    autorOf: {
      padding: 10,
      paddingTop: 0,
      fontSize: 10,
      fontWeight: "bold",
    }
  });