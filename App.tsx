import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ApolloProvider } from '@apollo/client';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
//import { client } from './auth/authQueryApollo';
import {client} from './auth/authHttpPhoenix';
import { ExchangeRates } from './queries/ExchangeRates';
import { GetRooms } from './queries/GetRooms';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';
import Chat from './screens/ChatScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Chatly rooms' }}/>
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
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
