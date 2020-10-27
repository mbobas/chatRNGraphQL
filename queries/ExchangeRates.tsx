import { useQuery, gql } from '@apollo/client';
import {View, Text, ScrollView} from 'react-native';
import React from 'react';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const ExchangeRates = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return data.rates.map(({ currency, rate }) => (
    <View key={currency}>
      <Text>
        {currency}: {rate}
      </Text>
    </View>
  ));
}