import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
});

export const iconStyles = StyleSheet.create({
  iconRowContainer: {
    position: 'absolute',
    bottom: 40,
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
