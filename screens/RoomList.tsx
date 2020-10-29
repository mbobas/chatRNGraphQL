import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { GetRooms } from '../queries/GetRooms';

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
    },
  });