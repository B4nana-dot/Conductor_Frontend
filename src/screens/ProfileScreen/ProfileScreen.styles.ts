import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '100%',
  },
});

export default styles;
