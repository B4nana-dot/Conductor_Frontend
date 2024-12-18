import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import axiosClient from '../../axios-client';
import styles from './HistoryRecieptScreen.styles';
import { useStateContext } from '../../Context/ContextProvider';

type Receipt = {
  id: string;
  fare_name: string;
  regular_total: string;
  discounted_total: string;
  date: string;
};

type HistoryReceiptScreenProps = StackScreenProps<any, 'HistoryReceiptScreen'>;

const fareNameMapping: Record<string, string> = {
  '1': 'Asingan',
  '2': 'Sta. Maria',
  '3': 'Urdaneta',
  '4': 'Dagupan',
};

const HistoryReceiptScreen: React.FC<HistoryReceiptScreenProps> = ({ navigation }) => {
  const [receipts, setReceipts] = useState<Receipt[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { currentUser } = useStateContext();

  const fetchReceipts = async () => {
    setLoading(true);
    try {
      // Fetch history records for the current user
      const response = await axiosClient.get('/history');

      // Get the current date in YYYY-MM-DD format
      const currentDate = new Date().toISOString().split('T')[0];

      // Format and filter receipts for the current date only
      const formattedReceipts = response.data
        .map((item: any) => ({
          id: item.id.toString(),
          fare_name: fareNameMapping[item.fare_id] || 'Unknown Fare',
          regular_total: item.regular_total,
          discounted_total: item.discounted_total,
          date: item.date,
        }))
        .filter((receipt) => receipt.date === currentDate); // Only include today's records

      setReceipts(formattedReceipts);
    } catch (error) {
      console.error(error);
      setError('Failed to load history records.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!currentUser || !currentUser.id) {
      Alert.alert('Error', 'User not authenticated.');
      navigation.goBack();
      return;
    }
    fetchReceipts();
  }, [currentUser]);

  const renderItem = ({ item }: { item: Receipt }) => (
    <TouchableOpacity
      style={styles.receiptItem}
      onPress={() =>
        navigation.navigate('FareDetailScreen', {
          fare_name: item.fare_name,
          regular_total: item.regular_total,
          discounted_total: item.discounted_total,
          date: item.date,
        })
      }
    >
      <Text style={styles.routeText}>{item.fare_name}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fare History (Today)</Text>

      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : receipts.length === 0 ? (
        <Text>No history records available for today.</Text>
      ) : (
        <FlatList
          data={receipts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      )}

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HistoryReceiptScreen;
