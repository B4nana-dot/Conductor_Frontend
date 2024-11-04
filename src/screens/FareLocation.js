import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,FlatList} from 'react-native';

const FareLocation = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    { id: '1', name: 'Fare amount for Sta.Maria' },
    { id: '2', name: 'Fare amount for Asingan' },
    { id: '3', name: 'Fare amount for Urdaneta' },
    { id: '4', name: 'Fare amount for Dagupan' },
  ];

  const handleSelectLocation = (id) => {
    setSelectedLocation(id);
  };

const handleContinuePress = () => {
  if (selectedLocation) {
    const selected = locations.find(location => location.id === selectedLocation);
    if (selected.name === 'Fare amount for Sta.Maria') {
      navigation.navigate('FareAmountForStaMaria');
    } else if (selected.name === 'Fare amount for Urdaneta') {
      navigation.navigate('FareAmountForUrdaneta');
    } else if (selected.name === 'Fare amount for Dagupan') {
      navigation.navigate('FareAmountForDagupan');
    }
    else if (selected.name === 'Fare amount for Asingan') {
      navigation.navigate('FareAmpountForAsingan')
    }
  } else {
    alert('Please select a location first!');
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fare Location</Text>

      <FlatList
        data={locations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.locationButton,
              selectedLocation === item.id && styles.selectedLocation,
            ]}
            onPress={() => handleSelectLocation(item.id)}
          >
            <View style={styles.checkbox}>
              {selectedLocation === item.id && <View style={styles.checked} />}
            </View>
            <Text style={styles.locationText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.continueButton}
        onPress={handleContinuePress}
      >
        <Text style={styles.continueButtonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 100,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    marginBottom: 20,
  },
  selectedLocation: {
    backgroundColor: '#d0e6ff',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#007bff',
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FareLocation;
