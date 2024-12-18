import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA', // Lighter background for a modern touch
    padding: 20, // Added padding for better spacing on smaller devices
  },
  title: {
    fontSize: 26, // Slightly larger font for better visibility
    fontWeight: '700', // Stronger font weight for a more prominent title
    color: '#333', // Dark gray for contrast and readability
    textAlign: 'center', // Center align the title
    marginBottom: 10, // Added margin for better spacing
  },
  subtitle: {
    fontSize: 36, // Increased font size for prominence
    fontWeight: '600', // Slightly lighter weight to create a distinction
    color: '#2C2C2C', // Darker gray for a modern and clean look
    marginBottom: 50, // More space for breathing room
    textAlign: 'center', // Center the subtitle
  },
});

export const iconStyles = StyleSheet.create({
  iconRowContainer: {
    position: 'absolute',
    bottom: 30, // Slightly raised for better spacing and accessibility
    width: '100%',
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Spread out the icons with equal spacing
    alignItems: 'center',
    width: '85%', // Slightly smaller width for a cleaner look
  },
  iconContainer: {
    alignItems: 'center',
    marginHorizontal: 15, // Increased horizontal spacing for better balance
  },
  iconLabel: {
    fontSize: 16, // Larger text for clarity
    fontWeight: '600', // Medium weight for clean but visible labels
    color: '#4A4A4A', // Soft gray for labels, easy on the eyes
    marginTop: 5, // Small space below the icon to create a clean layout
  },
});
