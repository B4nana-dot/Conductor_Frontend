import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import LoginScreen from './src/screens/LoginScreen/LoginScreen.tsx';
import ConductorPage from './src/components/Conductor/ConductorPage.tsx';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen.tsx'
import FareLocation from './src/screens/FareLocation/FareLocation.tsx';
import DailyFareCollection from "./src/components/DailyFareCollection/DailyFareCollection.tsx";
import HistoryReceiptScreen from "./src/screens/HistoryReceiptScreen/HistoryReceiptScreen.tsx";
import { ActivityIndicator, View } from 'react-native'; 
import { ImportsNotUsedAsValues } from 'typescript';
import FareAmountForLocation from './src/components/FareAmount/FareAmountForLocation.tsx';

const Stack = createStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const role = await AsyncStorage.getItem('role');

        if (token && role) {
          if (role === 'conductor') {
            setInitialRoute('ConductorPage');
          }
        } else {
          setInitialRoute('Login'); 
        }
      } catch (error) {
        console.error('Failed to retrieve role or token', error);
        setInitialRoute('Login'); 
      } finally {
        setIsLoading(false); 
      }
    };

    checkUserRole();
  }, []);

  if (isLoading) {
    
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ConductorPage" component={ConductorPage} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="FareLocation" component={FareLocation} />
        <Stack.Screen name="FareAmountForLocation" component={FareAmountForLocation} />
        <Stack.Screen name="DailyFareCollection" component={DailyFareCollection} />
        <Stack.Screen name="HistoryReceiptScreen" component={HistoryReceiptScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
