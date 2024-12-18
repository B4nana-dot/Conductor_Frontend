import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  routeList: {
    flex: 1,
  },
  routeContainer: {
    backgroundColor: '#f0f8ff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  routeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  fareLabel: {
    fontSize: 16,
    color: '#333',
  },
  fareValue: {
    fontSize: 16,
    color: '#555',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default styles;
