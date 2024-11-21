import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './NavigationIcons.styles.ts';
import { ROUTE, STATICROUTE } from '../../router.tsx'

interface NavigationIconsProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}


const NavigationIcons: React.FC<NavigationIconsProps> = ({ navigation }) => {

  const routes = [
    { label: STATICROUTE.Profile, route: ROUTE.ProfileScreen },
    { label: STATICROUTE.FareLocation, route: ROUTE.FareLocation },
    { label: STATICROUTE.DailyFare, route: ROUTE.DailyFareCollection },
    { label: STATICROUTE.HistoryReceipt, route: ROUTE.HistoryReceiptScreen },
  ];

  return (
    <View style={styles.iconRowContainer}>
      <View style={styles.iconRow}>
        {routes.map(({ label, route }) => (
          <TouchableOpacity
            key={route} // Use the unique route as the key
            style={styles.iconContainer}
            onPress={() => navigation.navigate(route)}
          >
            <Text style={styles.iconLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default NavigationIcons;
