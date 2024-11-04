import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

function FareAmountForAsingan({ navigation }) {
  const fareData = [
    { location: 'Sta. Maria-Asingan', R: 25, D: 20 },
    { location: 'Sta. Maria-Urdaneta City', R: 45, D: 36 },
    { location: 'Sta. Maria-Pauling', R: 65, D: 52 },
    { location: 'Sta. Maria-Villa/Tebag', R: 70, D: 56 },
    { location: 'Sta. Maria-Banaoang', R: 80, D: 64 },
    { location: 'Sta. Maria-Maningding', R: 85, D: 68 },
    { location: 'Sta. Maria-Tulaio', R: 90, D: 72 },
    { location: 'Sta. Maria-Calasio', R: 95, D: 76 },
    { location: 'Sta. Maria-Dagupan', R: 100, D: 88 },
  ];

  const handleFarePress = (location, fare, type) => {
    navigation.navigate('DailyFareCollection', { location, fare, type });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fare Amount For Asingan</Text>
      
      <View style={styles.fareList}>
        {fareData.map((item, index) => (
          <View key={index} style={styles.fareItem}>
            <Text style={styles.locationText}>{item.location}</Text>
            <TouchableOpacity style={styles.fareButton} onPress={() => handleFarePress(item.location, item.R, 'R')}>
              <Text style={styles.buttonText}>R: {item.R}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fareButton} onPress={() => handleFarePress(item.location, item.D, 'D')}>
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
    marginBottom: 50,
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

export default FareAmountForAsingan;
