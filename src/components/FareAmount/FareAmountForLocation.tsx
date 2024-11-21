import React from 'react';
import { View, Text, Button } from 'react-native';
import FareList from './FareList';
import styles from './FareAmountForLocation.styles';

const FareAmountForLocation = ({ route, navigation }) => {
    const { locationName } = route.params; // Get location name from route params

    const fareData = {
        StaMaria: [
            { location: 'Sta. Maria-Asingan', R: 25, D: 20 },
            { location: 'Sta. Maria-Urdaneta City', R: 45, D: 36 },
            { location: 'Sta. Maria-Pauling', R: 65, D: 52 },
            { location: 'Sta. Maria-Villa/Tebag', R: 70, D: 56 },
            { location: 'Sta. Maria-Banaoang', R: 80, D: 64 },
            { location: 'Sta. Maria-Maningding', R: 85, D: 68 },
            { location: 'Sta. Maria-Tulaio', R: 90, D: 72 },
            { location: 'Sta. Maria-Calasio', R: 95, D: 76 },
            { location: 'Sta. Maria-Dagupan', R: 100, D: 88 },
        ],
        Asingan: [
            { location: 'Asingan - Urdaneta', R: 45, D: 36 },
            { location: 'Asingan-Pauling', R: 65, D: 52 },
            { location: 'Asingan-Villa/Tebag', R: 70, D: 56 },
            { location: 'Asingan-Banaoang', R: 80, D: 64 },
            { location: 'Asingan-Maningding', R: 85, D: 68 },
            { location: 'Asingan-Tulaio', R: 90, D: 72 },
            { location: 'Asingan-Calasio', R: 95, D: 76 },
            { location: 'Asingan-Dagupan', R: 100, D: 88 },
        ],
        Urdaneta: [
            { location: 'Urdaneta - Asingan', R: 40, D: 32 },
            { location: 'Urdaneta - Binalonan', R: 50, D: 40 },
            { location: 'Urdaneta - Manaoag', R: 60, D: 48 },
        ],
        Dagupan: [
            { location: 'Dagupan - Pauling', R: 25, D: 20 },
            { location: 'Dagupan - Bued - Tulaio', R: 30, D: 24 },
            { location: 'Dagupan- Maningding', R: 35, D: 28 },
            { location: 'Dagupan - Banaong', R: 35, D: 28 },
            { location: 'Dagupan - Villa-Tebag', R: 40, D: 32 },
            { location: 'Dagupan - Pauling', R: 40, D: 32 },
            { location: 'Dagupan - Catablan-Guam', R: 45, D: 36 },
            { location: 'Dagupan - San Jose', R: 45, D: 36 },
            { location: 'Dagupan - Pinmaludpod', R: 50, D: 40 },
            { location: 'Dagupan - Nancamaliran', R: 50, D: 40 },
            { location: 'Dagupan - Urdaneta', R: 60, D: 48 },
            { location: 'Dagupan - Asingan', R: 95, D: 76 },
            { location: 'Dagupan - Sta. Maria', R: 100, D: 88 },
        ]
        // Add more locations as needed
    };

    const handleFarePress = (location, fare, type) => {
        navigation.navigate('DailyFareCollection', { location, fare, type });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Fare Amount For {locationName}</Text>

            <FareList
                fareData={fareData[locationName] || []} // Use the selected location's fare data
                onFarePress={handleFarePress}
            />

            <View style={styles.buttonContainer}>
                <Button title="Back" onPress={() => navigation.goBack()} />
                <Button title="Next" onPress={() => { /* handle next action */ }} />
            </View>
        </View>
    );
};

export default FareAmountForLocation;
