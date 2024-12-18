import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, TextInput } from 'react-native';
import axiosClient from '../../axios-client';
import styles from './TotalFareCollection.styles';
import { useStateContext } from '../../Context/ContextProvider';

const TotalFareCollection: React.FC<any> = ({ route, navigation }) => {
  const { location, fare, type, fareLocations, fareSelected } = route.params;
  const { currentUser } = useStateContext();
  const [isSaving, setIsSaving] = useState(false);
  const [routeNumber, setRouteNumber] = useState('');

  useEffect(() => {
    console.log('Current User in TotalFareCollection:', currentUser);
    console.log('Fare Locations:', fareLocations);
  }, [currentUser, fareLocations]);

  // Extract fare ID
  const fareId = Array.isArray(fareLocations)
    ? fareLocations[0]?.fare_id
    : fareLocations?.fare_id;

  // Define totals based on type
  const fareSelectedNumber = isNaN(Number(fareSelected)) ? 0 : Number(fareSelected);
  const regular_total = type === 'regular' ? fareSelectedNumber : 0;
  const discounted_total = type === 'discounted' ? fareSelectedNumber : 0;

  const validateInputs = () => {
    if (isNaN(regular_total) || isNaN(discounted_total)) {
      Alert.alert('Error', 'Invalid fare values. Please check the amounts.');
      return false;
    }
    if (!routeNumber || isNaN(Number(routeNumber))) {
      Alert.alert('Error', 'Please enter a valid route number.');
      return false;
    }
    return true;
  };

  const handleSaveCollection = async () => {
    if (isSaving) return;
    setIsSaving(true);

    if (!validateInputs()) {
      setIsSaving(false);
      return;
    }

    try {
      // Step 1: Save fare collection
      const fareCollectionResponse = await axiosClient.post('/fare-collections', {
        regular_total,
        discounted_total,
        fare_id: fareId,
        user_id: currentUser?.id,
        bus_num: currentUser?.bus_num,
        route: parseInt(routeNumber, 10),
        name: currentUser?.name,
      });

      if (fareCollectionResponse.status === 201) {
        const collectionId = fareCollectionResponse.data.id;

        // Step 2: Save history record
        const historyResponse = await axiosClient.post('/history', {
          fcollection_id: collectionId,
          user_id: currentUser?.id,
        });

        if (historyResponse.status === 201) {
          Alert.alert('Success', 'Fare collection and history record saved successfully.');
          navigation.navigate('FareLocation'); // Navigate to previous screen
        } else {
          Alert.alert('Warning', 'Fare collection saved, but history record creation failed.');
        }
      } else {
        Alert.alert('Error', 'Failed to save fare collection.');
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      Alert.alert('Error', error.response?.data?.message || 'An unexpected error occurred.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total Fare Collection</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Location: {location}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>
        Fare Type: {type === 'regular' ? 'Regular Fare' : 'Discounted Fare'}
      </Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Fare Amount: {fare}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Total Fare for the Day: {fareSelected}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Route Number"
        value={routeNumber}
        onChangeText={setRouteNumber}
        keyboardType="numeric"
      />

      <Button
        title={isSaving ? 'Saving...' : 'Save Collection'}
        onPress={handleSaveCollection}
        disabled={isSaving}
      />

      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default TotalFareCollection;
