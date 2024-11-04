import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AJOTCO</Text>
      <Text style={styles.subtitle}>HomePage</Text>

      {/* Icons positioned at the bottom */}
      <View style={styles.iconRowContainer}>
        <View style={styles.iconRow}>
          <TouchableOpacity 
            style={styles.iconContainer} 
            onPress={() => navigation.navigate('ProfileScreen')}
          >
            <Text style={styles.iconLabel}>Profile</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.iconContainer} 
            onPress={() => navigation.navigate('FareLocation')}
          >
            <Text style={styles.iconLabel}>FareLocation</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.iconContainer} 
            onPress={() => navigation.navigate('DailyFareCollection')}
          >
            <Text style={styles.iconLabel}>DailyFare</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.iconContainer} 
            onPress={() => navigation.navigate('HistoryReceiptScreen')}
          >
            <Text style={styles.iconLabel}>HistoryReceipt</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 60,
  },
  iconRowContainer: {
    position: 'absolute',
    bottom: 40, // Adjust as needed for distance from bottom
    width: '100%',
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
  },
  iconContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4a4a4a',
  },
});

export default HomePage;