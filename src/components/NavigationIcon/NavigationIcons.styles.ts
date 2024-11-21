import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
