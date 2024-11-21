import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './DailyFareCollection.styles';

interface Fare {
  location: string;
  fare: number;
}

interface DailyFareCollectionProps {
  route: {
    params: {
      location: string;
      fare: string;
      type: 'R' | 'D'; // 'R' for regular, 'D' for discounted
    };
  };
  navigation: {
    navigate: (screen: string) => void;
  };
}

const DailyFareCollection: React.FC<DailyFareCollectionProps> = ({ route, navigation }) => {
  const { location, fare, type } = route.params || {};

  const [fares, setFares] = useState<{
    regular: Fare[];
    discounted: Fare[];
  }>({
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

  const calculateTotal = (fareList: Fare[]): number => {
    return fareList.reduce((total, { fare }) => total + fare, 0);
  };

  const renderFareList = (fareList: Fare[], fareType: 'regular' | 'discounted') => (
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
      <Text style={styles.header}>Fare Collection</Text>
      {renderFareList(fares.regular, 'regular')}
      {renderFareList(fares.discounted, 'discounted')}
      <Button title="Add New Fare" onPress={() => navigation.navigate('FareLocation')} />
    </View>
  );
};

export default DailyFareCollection;
