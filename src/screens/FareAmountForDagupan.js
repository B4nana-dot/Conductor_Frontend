import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

function FareAmountForDagupan({ navigation }) {
  const fareData = [
    { location: 'Dagupan - Pauling', R: 25, D: 20 },
    { location: 'Dagupan - Bued - Tulaio', R: 30, D: 24 },
    { location: 'Dagupan- Maningding', R: 35, D: 28 },
    { location: 'Dagupan - Banaong', R: 35, D: 28 },
    { location: 'Dagupan - Villa-Tebag', R: 40, D: 32 },
    { location: 'Dagupan - Pauling', R: 40, D: 32 },
    { location: 'Dagupan - Catablan-Guam', R: 45, D: 36 },
    { location: 'Dagupan - San Jose', R: 45, D: 36 },
    { location: 'Dagupan - Pinmaludpod', R: 50, D: 40 },
    { location: 'Dagupan - Nancamaliran', R: 50, D: 40 },
    { location: 'Dagupan - Urdaneta', R: 60, D: 48 },
    { location: 'Dagupan - Asingan', R: 95, D: 76 },
    { location: 'Dagupan - Sta. Maria', R: 100, D: 88 },

   
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fare Amount For Dagupan</Text>
      
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
    marginBottom: 10,
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

export default FareAmountForDagupan;
