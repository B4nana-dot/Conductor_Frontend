import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface FareItemProps {
    location: string;
    R: number;
    D: number;
    onFarePress: (location: string, fare: number, type: string) => void;
}

const FareItem: React.FC<FareItemProps> = ({ location, R, D, onFarePress }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.locationText}>{location}</Text>
            <TouchableOpacity
                style={styles.fareButton}
                onPress={() => onFarePress(location, R, 'R')}
            >
                <Text style={styles.buttonText}>R: {R}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fareButton}
                onPress={() => onFarePress(location, D, 'D')}
            >
                <Text style={styles.buttonText}>D: {D}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    locationText: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 2,
    },
    fareButton: {
        flex: 1,
        marginHorizontal: 5,
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default FareItem;
