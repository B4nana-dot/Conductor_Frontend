import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  iconRowContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15, // Added padding for modern spacing
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Use even spacing for better alignment
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#F5F5F5', // Light background for a modern feel
    borderRadius: 15, // Rounded corners for container
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // For Android shadow
  },
  iconContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  iconLabel: {
    fontSize: 12, // Slightly smaller for a cleaner look
    fontWeight: '500',
    color: '#666', // Subtle dark gray
    marginTop: 4, // Added spacing below the icon
  },
  logoutContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#FF453A', // Slightly lighter red for modern look
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25, // More rounded for a sleek button
    shadowColor: '#FF453A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    transition: 'transform 0.3s ease', // Smooth hover effect (for web, but can simulate on React Native with scale)
  },
  logoutButtonHovered: {
    transform: [{ scale: 1.1 }], // Slight zoom effect on hover (simulate on press with TouchableHighlight or similar)
  },
  logoutLabel: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5, // Spacing between letters for modern typography
    textTransform: 'uppercase', // Makes the label modern and bold
    fontFamily: 'Avenir Next', // More modern font family (if available)
  },
  logoutButtonGradient: {
    backgroundColor: 'linear-gradient(45deg, #FF453A, #FF6A5F)', // Gradient effect
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
    shadowColor: '#FF453A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
});
