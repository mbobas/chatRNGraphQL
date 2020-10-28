import { useQuery, gql } from '@apollo/client';
import {View, Text, ScrollView, Button, StyleSheet} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../Colors';

const GET_MESSAGES = gql`
query roomMessages {
  room (id: "fecdc462-781e-487c-b96e-7f079b92e04b"){
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

export const GetMessages = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_MESSAGES);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :( GetMessages</Text>;

  console.log(data.room.messages.body);

  return data.room.messages.map(({ body, id }) => (
    <View key={id}>
         <TouchableOpacity style={styles.roomButton}
            onPress={()=> navigation.navigate('Home')}
         >
         <Text style={styles.roomButtonText}>{body}</Text>
         </TouchableOpacity>
    </View>
  ));
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






