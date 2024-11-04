import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

function FareAmountForUrdaneta({ navigation }) {
  const fareData = [
    { location: 'Urdaneta - Pauling', R: 25, D: 20 },
    { location: 'Urdaneta - Villa/Tebag', R: 30, D: 24 },
    { location: 'Urdaneta - Banaoang', R: 35, D: 28 },
    { location: 'Urdaneta - Maningding', R: 40, D: 32 },
    { location: 'Urdaneta - Tulia/Bued', R: 40, D: 32 },
    { location: 'Urdaneta - Calasiao', R: 50, D: 40 },
    { location: 'Urdaneta - Dagupan', R: 60, D: 48 },
  
  ];
  const handleFarePress = (location, fare, type) => {
    navigation.navigate('DailyFareCollection', { location, fare, type });

  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fare Amount For Urdaneta</Text>
      
      <View style={styles.fareList}>
        {fareData.map((item, index) => (
          <View key={index} style={styles.fareItem}>
            <Text style={styles.locationText}>{item.location}</Text>
            <TouchableOpacity style={styles.fareButton}>
              <Text style={styles.buttonText}>R: {item.R}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fareButton}>
              <Text style={styles.buttonText}>D: {item.D}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button title="Next" onPress={() => {/* handle next action */}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 150,
  },
  fareList: {
    flex: 1,
  },
  fareItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 2,
  },
  fareButton: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
});

export default FareAmountForUrdaneta;
