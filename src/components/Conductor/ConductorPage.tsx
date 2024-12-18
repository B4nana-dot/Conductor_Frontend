import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './ConductorPage.styles';  // Styles for the page
import NavigationIcons from '../NavigationIcon/NavigationIcons';  // Correct import for the component
import { useStateContext } from '../../Context/ContextProvider';

interface ConductorPageProps {
  navigation: {
    navigate: (screen: string) => void;
    replace: (screen: string) => void;
  };
}

const ConductorPage: React.FC<ConductorPageProps> = ({ navigation }) => {
  const { user, token, setUser, setToken, notification } = useStateContext();
  console.log({user: user}); //asdasdasd
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AJOTCO</Text>
      <Text style={styles.subtitle}>HomePage</Text>

      {/* Reusable navigation icons */}
      <NavigationIcons navigation={navigation} />
    </View>
  );
};

export default ConductorPage;
