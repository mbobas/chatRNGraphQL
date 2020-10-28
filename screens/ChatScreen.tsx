import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GetMessages } from '../queries/GetMessages';
import { Colors } from '../Colors';

export default function Chat({ route, navigation }) {
    const { roomID, roomName, roomUserName } = route.params;

    return (
        <View style={styles.container}>
            <Text>{roomName}</Text>
            <Text>Created by{roomUserName}</Text>
        <GetMessages roomID={roomID} navigation={navigation}/>
      </View>
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