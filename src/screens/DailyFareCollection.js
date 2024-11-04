import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function DailyFareCollection({ route, navigation }) {
  const { location, fare, type } = route.params || {};

  const [fares, setFares] = useState({
    regular: [],
    discounted: [],
  });

  useEffect(() => {
    if (location && fare && type) {
      const fareAmount = Number(fare);
      setFares((prevFares) => ({
        ...prevFares,
        [type === 'R' ? 'regular' : 'discounted']: [
          ...prevFares[type === 'R' ? 'regular' : 'discounted'],
          { location, fare: fareAmount },
        ],
      }));
    }
  }, [location, fare, type]);

  const calculateTotal = (fareList) => {
    return fareList.reduce((total, { fare }) => total + fare, 0);
  };

  const renderFareList = (fareList, fareType) => (
    <View style={styles.section}>
      <Text style={styles.sectionHeader}>
        {fareType === 'regular' ? 'Regular Fares' : 'Discounted Fares'}
      </Text>
      {fareList.length > 0 ? (
        fareList.map((entry, index) => (
          <View key={`${entry.location}-${entry.fare}-${index}`} style={styles.fareRow}>
            <Text style={styles.locationText}>{entry.location}</Text>
            <Text style={styles.amountText}>Fare: {entry.fare}</Text>
          </View>
        ))
      ) : (
        <Text>No {fareType === 'regular' ? 'Regular' : 'Discounted'} Fares Added</Text>
      )}
      <Text style={styles.totalText}>
        Total {fareType === 'regular' ? 'Regular' : 'Discounted'}: {calculateTotal(fareList)}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daily Fare Collection</Text>
      {renderFareList(fares.regular, 'regular')}
      {renderFareList(fares.discounted, 'discounted')}
      <Button title="Add New Fare" onPress={() => navigation.navigate('FareAmountForStaMaria')} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  locationText: {
    fontSize: 16,
  },
  amountText: {
    fontSize: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default DailyFareCollection;
