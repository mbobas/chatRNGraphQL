import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { client } from './auth/authQueryApollo';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text>My first Apollo app 🚀</Text>
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
