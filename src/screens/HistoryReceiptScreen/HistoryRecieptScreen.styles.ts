import { StyleSheet } from 'react-native';

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

export default styles;
