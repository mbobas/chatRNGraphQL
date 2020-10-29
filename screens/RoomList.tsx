import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { GetRooms } from '../components/GetRooms';
import { Colors } from '../Colors';

export default function RoomList ({ navigation }) {
    return (
          <View style={styles.container}>
            <GetRooms navigation={navigation}/>
          </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.WHITE,
    },
  });