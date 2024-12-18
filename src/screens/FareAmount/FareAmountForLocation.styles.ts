import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F7F7F7', // Soft background color for a modern look
        justifyContent: 'center', // Centers content vertically
    },
    header: {
        fontSize: 28, // Larger, more modern header size
        fontWeight: '700', // Slightly bolder for emphasis
        textAlign: 'center',
        color: '#333', // Darker text color for contrast
        marginBottom: 40, // More space under the header
        fontFamily: 'Avenir Next', // More modern, clean font
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    button: {
        backgroundColor: '#007BFF', // Modern button color
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25, // Rounded edges for a sleek button
        width: '48%', // Making buttons fit side by side
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#007BFF', // Subtle shadow for a floating effect
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5, // Elevation for Android devices
    },
    buttonLabel: {
        color: '#FFF', // White text for better contrast
        fontSize: 16, // Clean font size
        fontWeight: '600', // Bold label for readability
        textTransform: 'uppercase', // Modern touch
    },
});

export default styles;
