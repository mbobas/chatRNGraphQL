import { useQuery, gql } from '@apollo/client';
import {View, Text, ScrollView, Button, StyleSheet} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const RoomIcon = () => (
    <View style={styles.roomIcon}>
    <Icon name="arrow-circle-right" size={20} color="#42f5b6" />
    </View>
    );

const customTextButton = () => (
  <Icon.Button name="facebook" backgroundColor="transparent">
    <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
      Login with Facebook
    </Text>
  </Icon.Button>
);

const GET_ROOMS = gql`
  query getRooms {
    usersRooms {
      rooms {
        id
        name
      }
      user {
        id
        firstName
        lastName
        role
        
      }
    }
  }
`;

export const GetRooms = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_ROOMS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :( GetRooms</Text>;

  return data.usersRooms.rooms.map(({ id, name }) => (
    <View style={styles.roomWrapper} key={id}>
        <RoomIcon/>
         <TouchableOpacity style={styles.roomButton}
            onPress={()=> navigation.navigate('Chat', {
              roomID: id,
              roomName: name,
              //roomUserName: userRoomName //nie działa do naprawy CreatedBy
            })}
         >
         <Text style={styles.roomButtonText}>{name}</Text>
         </TouchableOpacity>
    </View>
  ));
}

const styles = StyleSheet.create({
  roomWrapper: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.LIGHT_GREY,

  },
  roomButton: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    
  },
  roomButtonText: {
    fontWeight: "bold",
  },
  roomIcon: {
    backgroundColor: Colors.WHITE,
    paddingTop: 15,
    paddingLeft: 10,
  }
});






