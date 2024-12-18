import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './NavigationIcons.styles.ts';
import { ROUTE, STATICROUTE } from '../../router.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosClient from '../../axios-client.js';


interface NavigationIconsProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const NavigationIcons: React.FC<NavigationIconsProps> = ({ navigation }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem('ACCESS_TOKEN');
      setToken(storedToken);
      console.log('Retrieved Token:', storedToken);
    };

    fetchToken();
  }, []);

  const handleLogout = async () => {
    try {
      // Call the logout API using axiosClient
      await axiosClient.post('/logout'); // No need to manually pass the token as it's handled by the interceptor

      // Clear the token from AsyncStorage
      await AsyncStorage.removeItem('ACCESS_TOKEN');

      // Redirect the user to the login screen
      navigation.navigate('LoginScreen'); // Replace with your actual login screen route
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const routes = [
    { label: STATICROUTE.FareLocation, route: ROUTE.FareLocation },
    { label: STATICROUTE.DailyFare, route: ROUTE.DailyFareCollection },
    { label: STATICROUTE.HistoryReceipt, route: ROUTE.HistoryReceiptScreen },
  ];

  return (
    <View style={styles.iconRowContainer}>
      <View style={styles.iconRow}>
        {routes.map(({ label, route }) => (
          <TouchableOpacity
            key={route}
            style={styles.iconContainer}
            onPress={() => navigation.navigate(route)}
          >
            <Text style={styles.iconLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={handleLogout}
      >
        <Text style={styles.iconLabel}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationIcons;
