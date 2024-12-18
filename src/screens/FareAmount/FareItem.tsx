import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface FareItemProps {
    location: string;
    regular_price: number;
    discounted_price: number;
    onFarePress: (location: string, fare: number, type: string) => void;
    location_fare: any
}

const FareItem: React.FC<FareItemProps> = ({ location, regular_price, discounted_price, onFarePress, location_fare }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.locationText}>{location}</Text>
            <TouchableOpacity
                style={styles.fareButton}
                onPress={() => onFarePress(location_fare.fare_location, regular_price, 'regular')}
            >
                <Text style={styles.buttonText}>R: {regular_price}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fareButton}
                onPress={() => onFarePress(location_fare.fare_location, discounted_price, 'discounted')}
            >
                <Text style={styles.buttonText}>D: {discounted_price}</Text>
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
