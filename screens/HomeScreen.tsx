import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { GetRooms } from '../queries/GetRooms';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
    return (
  
          <View style={styles.container}>
            <TouchableOpacity style={styles.roomButton}
              onPress={() => navigation.navigate('Details')}
            />
            <GetRooms navigation={navigation}/>
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
  
    }
  });