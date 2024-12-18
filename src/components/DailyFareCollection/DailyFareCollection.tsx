import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Alert, TextInput } from 'react-native';
import axiosClient from '../../axios-client';
import styles from './DailyFareCollection.styles';
import { useStateContext } from '../../Context/ContextProvider';

const DailyFareCollection = () => {
  const [routes, setRoutes] = useState([]); // Dynamic routes from API
  const { currentUser } = useStateContext();
  const currentUserId = currentUser?.id; // Replace with actual logged-in user's ID from your app's state or context

  // Get the current date in the format YYYY-MM-DD
  const currentDate = new Date().toISOString().split('T')[0]; 

  // Fetch fare collections from the API for the current date and logged-in user
  useEffect(() => {
    const fetchFareCollections = async () => {
      try {
        // Fetch the data from the backend (filtering by the current date and user_id)
        const response = await axiosClient.get(`/fare-collections?user_id=${currentUserId}&date=${currentDate}`);

        // Map the fetched data to match the required structure
        const data = response.data.map((fareCollection) => ({
          id: fareCollection.id,
          name: `Route ${fareCollection.route}`,
          regular: fareCollection.regular_total,
          discounted: fareCollection.discounted_total,
        }));
        console.log('Mapped fare collections:', data); // Debug the mapped data
        setRoutes(data);
      } catch (error) {
        console.error('Error fetching fare collections:', error);
        Alert.alert('Error', 'Failed to fetch fare collections.');
      }
    };

    fetchFareCollections();
  }, []);

  // Store reports and reset routes when ending routes
  const handleEndRoutes = async () => {
    try {
      // Send each route as a report to the backend
      const reportPromises = routes.map((route) =>
        axiosClient.post('/reports', {
          user_id: currentUserId, // Use the current logged-in user ID
          fare_id: 1, // Replace with actual fare ID
          fare_collection_id: route.id,
        })
      );

      await Promise.all(reportPromises);

      Alert.alert('Routes Ended', 'The data has been saved.');

      // Reset the routes
      setRoutes([{ id: 1, name: 'Route 1', regular: 0, discounted: 0 }]);
    } catch (error) {
      console.error('Error ending routes:', error);
      Alert.alert('Error', 'Failed to save reports.');
    }
  };

  // Calculate total fare for each route
  const calculateTotal = (route) => {
    return route.regular + route.discounted; // Exclude pickUp
  };

  // Update fare values dynamically (for real-time adjustments)
  const handleUpdateFare = (routeId, field, value) => {
    setRoutes((prevRoutes) =>
      prevRoutes.map((route) =>
        route.id === routeId
          ? { ...route, [field]: parseInt(value) || 0 }
          : route
      )
    );
  };

  const renderRoute = ({ item }) => (
    <View style={styles.routeContainer}>
      <Text style={styles.routeName}>{item.name}</Text>
      <View style={styles.fareRow}>
        <Text style={styles.fareLabel}>Regular</Text>
        <TextInput
          style={styles.fareInput}
          keyboardType="numeric"
          value={item.regular.toString()}
          onChangeText={(value) => handleUpdateFare(item.id, 'regular', value)}
        />
      </View>
      <View style={styles.fareRow}>
        <Text style={styles.fareLabel}>Discounted</Text>
        <TextInput
          style={styles.fareInput}
          keyboardType="numeric"
          value={item.discounted.toString()}
          onChangeText={(value) => handleUpdateFare(item.id, 'discounted', value)}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Fare Collection</Text>
      <FlatList
        data={routes}
        renderItem={renderRoute}
        keyExtractor={(item) => item.id.toString()}
        style={styles.routeList}
      />
      <View style={styles.buttonContainer}>
        <Button title="End Routes" onPress={handleEndRoutes} />
      </View>
    </View>
  );
};

export default DailyFareCollection;
