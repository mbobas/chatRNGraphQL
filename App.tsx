import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { client } from './auth/authQueryApollo';
import {client} from './auth/authWithHeader';
import { ExchangeRates } from './queries/ExchangeRates';
import { GetRooms } from './queries/GetRooms';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text>My first Apollo app 🚀</Text>
        <GetRooms />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
