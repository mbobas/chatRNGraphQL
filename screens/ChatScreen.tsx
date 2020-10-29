import 'react-native-gesture-handler';
import React, { useState}  from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { GetMessages } from '../queries/GetMessages';
import { Colors } from '../Colors';
import { SendMessage } from '../mutations/SendMessage';

export default function Chat({ route, navigation }) {
    const { roomID, roomName } = route.params;
    
    return (
      <View style={styles.container}>
        <View style={styles.headerChat}>
        <Text>{roomName}</Text>
            <Text>Created by{}</Text>
        </View>
        <GetMessages roomID={roomID} navigation={navigation}/>
        <SendMessage roomID={roomID} navigation={navigation}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
    headerChat: {
      flex:1,
    },
    roomButton: {
        backgroundColor: Colors.WHITE,
        padding: 15,
      
      },
      roomButtonText: {
        fontWeight: "bold",
      }
  });