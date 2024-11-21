import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  locationText: {
    fontSize: 16,
  },
  amountText: {
    fontSize: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default styles;
