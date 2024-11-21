import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import styles from './ProfileScreen.styles'; // Import the styles

type ProfileScreenProps = {
  // You can define any props here if needed
};

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const [username, setUsername] = useState<string>('Username');
  const [email, setEmail] = useState<string>('Email');
  const [password, setPassword] = useState<string>(''); 
  const [phoneNumber, setPhoneNumber] = useState<string>('+63');  
  const [busName, setBusName] = useState<string>('No.');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  
  const navigation = useNavigation();

  const handleSave = () => {
    Alert.alert('Profile Updated', 'Your profile has been successfully updated.');
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://example.com/path/to/your/profile-logo.png' }} 
        style={styles.profileImage}
      />

      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        editable={isEditing}
      />
      
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        editable={isEditing}
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter new password"
        secureTextEntry
        value={isEditing ? password : '********'} 
        onChangeText={setPassword}
        editable={isEditing}
      />

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        editable={isEditing}
      />

      <Text style={styles.label}>Bus Name:</Text>
      <TextInput
        style={styles.input}
        value={busName}
        onChangeText={setBusName}
        editable={isEditing}
      />

      <Button title={isEditing ? "Save" : "Edit"} onPress={isEditing ? handleSave : () => setIsEditing(true)} />
    </View>
  );
};

export default ProfileScreen;
