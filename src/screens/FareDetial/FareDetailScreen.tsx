import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import styles from './FareDetailScreen.style';

type FareDetailScreenProps = StackScreenProps<any, 'FareDetailScreen'>;

const FareDetailScreen: React.FC<FareDetailScreenProps> = ({ route }) => {
  const { fare_name, regular_total, discounted_total, date } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fare Details</Text>
      <Text style={styles.detailText}>Fare Name: {fare_name}</Text>
      <Text style={styles.detailText}>Regular Fare: {regular_total}</Text>
      <Text style={styles.detailText}>Discounted Fare: {discounted_total}</Text>
      <Text style={styles.detailText}>Date: {date}</Text>
    </View>
  );
};

export default FareDetailScreen;
  