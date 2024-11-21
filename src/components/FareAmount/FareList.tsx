import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import FareItem from './FareItem';

interface FareListProps {
  fareData: { location: string; R: number; D: number }[];
  onFarePress: (location: string, fare: number, type: string) => void;
}

const FareList: React.FC<FareListProps> = ({ fareData, onFarePress }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.listContainer}>
        {fareData.map((item, index) => (
          <FareItem
            key={index}
            location={item.location}
            R={item.R}
            D={item.D}
            onFarePress={onFarePress}
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
