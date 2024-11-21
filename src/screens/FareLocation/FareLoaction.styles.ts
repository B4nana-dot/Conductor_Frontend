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
    marginVertical: 100,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    marginBottom: 20,
  },
  selectedLocation: {
    backgroundColor: '#d0e6ff',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#007bff',
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
