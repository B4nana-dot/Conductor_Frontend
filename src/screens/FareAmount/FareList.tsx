import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import FareItem from './FareItem';

interface FareListProps {
  fareData: {
    fare_location: string; // Full location string (e.g., "Asingan - Urdaneta")
    regular_price: number; // Regular fare price
    discounted_price: number; // Discounted fare price
    fare: { fare_location: string }; // This is the "fare" object containing the location (e.g., { fare_location: 'Asingan' })
  }[];
  onFarePress: (location: string, fare: number, type: 'regular' | 'discounted') => void;
}

const FareList: React.FC<FareListProps> = ({ fareData, onFarePress }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.listContainer}>
        {fareData.map((item, index) => (
          <FareItem
            key={index}
            location={item.fare_location} // Full location string (e.g., "Asingan - Urdaneta")
            location_fare={item.fare} // Pass the "fare" object which contains just the location (e.g., { fare_location: 'Asingan' })
            regular_price={item.regular_price} // Regular fare price
            discounted_price={item.discounted_price} // Discounted fare price
            onFarePress={onFarePress} // Pass the onPress handler for each item
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Ensures content grows to fit the ScrollView
    padding: 10, // Optional padding for content spacing
  },
  listContainer: {
    flex: 1,
  },
});

export default FareList;
