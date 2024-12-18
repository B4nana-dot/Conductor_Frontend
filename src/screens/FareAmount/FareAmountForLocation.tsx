import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import FareList from './FareList';
import { RouteProp } from '@react-navigation/native';
import styles from './FareAmountForLocation.styles';

type FareLocation = {
  fare_location: string;
  regular_price: number;
  discounted_price: number;
};

type FareAmountForLocationRouteParams = {
  locationName: string;
  fareLocations: FareLocation[];
  totalFare: number;
};

type FareAmountForLocationProps = {
  navigation: any;
  route: RouteProp<{ params: FareAmountForLocationRouteParams }, 'params'>;
};

const FareAmountForLocation: React.FC<FareAmountForLocationProps> = ({ route, navigation }) => {
  const { locationName, fareLocations } = route.params;

  // Track total fare
  const [totalFare, setTotalFare] = useState(route.params.totalFare || 0); // Initialize with totalFare from params or 0

  // Update total fare when user selects a fare (only replaces the fare, no addition)
  const handleFarePress = (location: string, fare: number, type: 'regular' | 'discounted') => {
    setTotalFare(fare); // Set the total fare to the selected fare (no addition)

    // Navigate to the DailyFareCollection screen with updated totalFare
    navigation.navigate('TotalFareCollection', { location, fare, type, fareLocations, fareSelected: fare });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fare Amount For {locationName}</Text>
      <FareList
        fareData={fareLocations}
        onFarePress={handleFarePress} // Pass the updated fare
      />
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button title="Next" onPress={() => { /* handle next action */ }} />
      </View>
      {/* Display the current total fare */}
      <Text style={styles.totalFareText}>Total Fare: {totalFare}</Text>
    </View>
  );
};

export default FareAmountForLocation;
