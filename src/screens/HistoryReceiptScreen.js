import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const receipts = [
  { id: '1', route: 'Urdaneta-Pauling', date: '09-10-24' },
  { id: '2', route: 'Urdaneta-Villa/Tebag', date: '09-10-24' },
  { id: '3', route: 'Urdaneta-Pauling', date: '09-10-24' },
  { id: '4', route: 'Urdaneta-Pauling', date: '10-10-24'},
  { id: '5', route: 'Urdaneta-Pauling', date: '10-10-24'},
  { id: '6', route: 'Urdaneta-Pauling', date: '10-10-24'},
  { id: '7', route: 'Urdaneta-Pauling', date: '10-10-24'},
  { id: '8', route: 'Urdaneta-Pauling', date: '10-10-24'},
  { id: '9', route: 'Urdaneta-Pauling', date: '10-10-24'},
  { id: '10', route: 'Urdaneta-Pauling', date: '10-10-24'},
  { id: '11', route: 'Urdaneta-Pauling', date: '10-10-24'},

];

const HistoryReceiptScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  receiptItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F0F4F8',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  routeText: {
    fontSize: 16,
    fontWeight: '500',
  },
  dateText: {
    fontSize: 14,
    color: '#888',
  },
  backButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HistoryReceiptScreen;
