import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import axios from '../../axios-client';
import FareList from './FareList';

const FareListScreen = () => {
  const [fareData, setFareData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFares = async () => {
      try {
        const response = await axios.get('/api/fares');
        setFareData(response.data);
      } catch (error) {
        console.error('Failed to fetch fare data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFares();
  }, []);

  const handleFarePress = (location: string, fare: number, type: string) => {
    console.log(`Fare pressed: Location=${location}, Fare=${fare}, Type=${type}`);
    // Add your logic for handling fare selection (e.g., navigation, display details)
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      <Text>Available Fares</Text>
      <FareList fareData={fareData} onFarePress={handleFarePress} />
    </View>
  );
};

export default FareListScreen;
