import 'react-native-gesture-handler';
import React, { useState}  from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { GetMessages } from '../queries/GetMessages';
import { Colors } from '../Colors';
import { SendMessage } from '../mutations/SendMessage';

export default function Chat({ route, navigation }) {
    const [value, onChangeText] = useState('Say something');
    const { roomID, roomName } = route.params;

    // const resetInputvalue = (value: any) => {
    //   value=""
    // }
    
    return (
        <ScrollView style={styles.container}>
            <Text>{roomName}</Text>
            <Text>Created by{}</Text>
        <GetMessages roomID={roomID} navigation={navigation}/>
        <SendMessage onChangeText={onChangeText} roomID={roomID} body={value} navigation={navigation}/>
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