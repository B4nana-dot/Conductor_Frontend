import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'; // Import from `@react-navigation/stack`
import styles from './HistoryRecieptScreen.styles';

// Define the type for a single receipt
type Receipt = {
  id: string;
  route: string;
  date: string;
};

// Define the props for the screen
type HistoryReceiptScreenProps = StackScreenProps<any, 'HistoryReceiptScreen'>;

const receipts: Receipt[] = [
  { id: '1', route: 'Urdaneta-Pauling', date: '09-10-24' },
  { id: '2', route: 'Urdaneta-Villa/Tebag', date: '09-10-24' },
  { id: '3', route: 'Urdaneta-Pauling', date: '09-10-24' },
  { id: '4', route: 'Urdaneta-Pauling', date: '10-10-24' },
  { id: '5', route: 'Urdaneta-Pauling', date: '10-10-24' },
  { id: '6', route: 'Urdaneta-Pauling', date: '10-10-24' },
  { id: '7', route: 'Urdaneta-Pauling', date: '10-10-24' },
  { id: '8', route: 'Urdaneta-Pauling', date: '10-10-24' },
  { id: '9', route: 'Urdaneta-Pauling', date: '10-10-24' },
  { id: '10', route: 'Urdaneta-Pauling', date: '10-10-24' },
  { id: '11', route: 'Urdaneta-Pauling', date: '10-10-24' },
];

const HistoryReceiptScreen: React.FC<HistoryReceiptScreenProps> = ({ navigation }) => {
  // Render a single receipt item
  const renderItem = ({ item }: { item: Receipt }) => (
    <View style={styles.receiptItem}>
      <Text style={styles.routeText}>{item.route}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History Receipt</Text>
      <FlatList
        data={receipts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HistoryReceiptScreen;
