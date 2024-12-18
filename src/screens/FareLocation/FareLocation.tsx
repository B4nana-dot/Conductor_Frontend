import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import axiosClient from '../../axios-client'; // Import axiosClient
import styles from './FareLocation.styles'; // Import the styles

type FareLocationProps = {
  navigation: NavigationProp<any>; // Replace `any` with your specific navigation type if using a typed stack
};

const FareLocation: React.FC<FareLocationProps> = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [faresLocations, setFaresLocations] = useState<any[]>([]); // To store fetched fare data
  const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState<string | null>(null); // To handle errors
  const [fares, setFares] = useState<any[]>([]);

  console.log({ faresLocations }, 'faresLocations');

  // Fetch fares from the API
  useFocusEffect(
    useCallback(() => {
      const fetchFares = async () => {
        try {
          const response = await axiosClient.get('/fares');
          setFares(response.data);
        } catch (error) {
          console.error(error?.message);
        }
      };

      fetchFares();
    }, [])
  );

  // Handle location selection and fetch matched data
  const handleSelectLocation = async (id: number) => {
    setSelectedLocation(id); // Update selected location
    setLoading(true); // Set loading state
    setError(null); // Clear any previous error

    try {
      const response = await axiosClient.get('/fare-locations');
      const fareLocations = response.data;

      // Find the fare location that matches the selected fare_id (id)
      const matchedData = fareLocations.filter((item: any) => item.fare_id === id);

      // If we have matched data, set it to state
      if (matchedData.length > 0) {
        setFaresLocations(matchedData); // Set matched fare locations to state
      } else {
        setFaresLocations([]); // Clear fares if no match is found
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch fare locations'); // Handle error
    }

    setLoading(false); // Set loading state to false
  };

  const handleContinuePress = () => {
    if (selectedLocation) {
      const selected = fares.find((location) => location.id === selectedLocation);
      if (selected) {
        navigation.navigate('FareAmountForLocation', {
          locationName: selected.fare_location,
          fareLocations: faresLocations, // Pass fareLocations as a parameter
        });
      }
    } else {
      Alert.alert('No Location Selected', 'Please select a location first!');
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fare Location</Text>

      {/* Render the locations from fares */}
      <FlatList
        data={fares}
        keyExtractor={(item) => item.id.toString()} // Ensure IDs are unique
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.locationButton,
              selectedLocation === item.id && styles.selectedLocation,
            ]}
            onPress={() => handleSelectLocation(item.id)} // Passing the fare's id here
          >
            <View style={styles.checkbox}>
              {selectedLocation === item.id && <View style={styles.checked} />}
            </View>
            <Text style={styles.locationText}>Fare amount for {item.fare_location}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Show loading or error message */}
      {loading && <Text>Loading fares...</Text>}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}


      <TouchableOpacity style={styles.continueButton} onPress={handleContinuePress}>
        <Text style={styles.continueButtonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FareLocation;
