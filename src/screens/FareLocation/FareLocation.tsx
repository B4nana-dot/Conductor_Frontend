import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import styles from './FareLoaction.styles';// Import the styles

type Location = {
  id: string;
  name: string;
  identifier: string;
};

type FareLocationProps = {
  navigation: NavigationProp<any>; // Replace `any` with your specific navigation type if using a typed stack
};

const FareLocation: React.FC<FareLocationProps> = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locations: Location[] = [
    { id: '1', name: 'Sta. Maria', identifier: 'StaMaria' },
    { id: '2', name: 'Asingan', identifier: 'Asingan' },
    { id: '3', name: 'Urdaneta', identifier: 'Urdaneta' },
    { id: '4', name: 'Dagupan', identifier: 'Dagupan' },
  ];

  const handleSelectLocation = (id: string) => {
    setSelectedLocation(id);
  };

  const handleContinuePress = () => {
    if (selectedLocation) {
      const selected = locations.find((location) => location.id === selectedLocation);
      if (selected) {
        navigation.navigate('FareAmountForLocation', { locationName: selected.identifier });
      }
    } else {
      Alert.alert('No Location Selected', 'Please select a location first!');
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
            <Text style={styles.locationText}>Fare amount for {item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.continueButton} onPress={handleContinuePress}>
        <Text style={styles.continueButtonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FareLocation;
