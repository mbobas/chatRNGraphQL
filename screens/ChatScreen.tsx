import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { GetMessages } from '../queries/GetMessages';
import { Colors } from '../Colors';
import { SendMessage } from '../mutations/SendMessage';

export default function Chat({ route, navigation }) {
    const { roomID, roomName } = route.params;
    const body = "TEST3"
    return (
        <ScrollView style={styles.container}>
            <Text>{roomName}</Text>
            <Text>Created by{}</Text>
        <GetMessages roomID={roomID} navigation={navigation}/>
        
        <SendMessage roomID={roomID} body={body} navigation={navigation}/>
      </ScrollView>
    );
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