import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from './src/screens/LoginScreen';
import AdminDashboard from './src/screens/AdminDashboard';
import ConductorPage from './src/screens/ConductorPage';
import HomePage from './src/screens/HomePage';
import ProfileScreen from './src/screens/ProfileScreen';
import FareLocation from './src/screens/FareLocation';
import FareAmountForUrdaneta from "./src/screens/FareAmountForUrdaneta";
import FareAmountForDagupan from "./src/screens/FareAmountForDagupan";
import FareAmountForStaMaria from "./src/screens/FareAmountForStaMaria";
import DailyFareCollection from "./src/screens/DailyFareCollection.js";
import HistoryReceiptScreen from "./src/screens/HistoryReceiptScreen.js";
import { ActivityIndicator, View } from 'react-native'; 
import { ImportsNotUsedAsValues } from 'typescript';

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
          if (role === 'admin') {
            setInitialRoute('AdminDashboard');
          } else if (role === 'conductor') {
            setInitialRoute('ConductorPage');
          } else {
            setInitialRoute('HomePage');
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
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="ConductorPage" component={ConductorPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="FareLocation" component={FareLocation} />
        <Stack.Screen name="FareAmountForUrdaneta" component={FareAmountForUrdaneta} />
        <Stack.Screen name="FareAmountForStaMaria" component={FareAmountForStaMaria} />
        <Stack.Screen name="FareAmountForDagupan" component={FareAmountForDagupan} />
        <Stack.Screen name="DailyFareCollection" component={DailyFareCollection} />
        <Stack.Screen name="HistoryReceiptScreen" component={HistoryReceiptScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
