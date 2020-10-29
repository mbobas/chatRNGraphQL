import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/client';
import * as React from 'react';
import {client} from './auth/authHttpPhoenix';
import RoomList from './screens/RoomList';
import Chat from './screens/ChatScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="RoomList">
          <Stack.Screen name="RoomList" component={RoomList} options={{ title: 'Chatly rooms'}}/>
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
