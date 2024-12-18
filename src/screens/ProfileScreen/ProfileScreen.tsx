import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, Image } from 'react-native';
import axiosClient from '../../axios-client';
import styles from './ProfileScreen.styles'; // Import the styles

type ProfileScreenProps = {
  // You can define any props here if needed
};

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const [userData, setUserData] = useState<any>({}); // To hold user data
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Fetch current user data
  const fetchUserData = async () => {
    try {
      const response = await axiosClient.get('/user'); // Use your API endpoint to fetch user data
      setUserData(response.data.user); // Assuming your API returns the user in a `user` field
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Save updated user data
  const handleSave = async () => {
    try {
      const response = await axiosClient.put('/user', { ...userData }); // Use your API endpoint to update user data
      setUserData(response.data.user); // Update state with the returned user
      Alert.alert('Profile Updated', 'Your profile has been successfully updated.');
      setIsEditing(false);
    } catch (error) {
      Alert.alert('Error', 'There was an error updating your profile.');
      console.error('Error saving user data:', error);
    }
  };

  // Load user data on component mount
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://example.com/path/to/your/profile-logo.png' }} 
        style={styles.profileImage}
      />

      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={userData.username}
        onChangeText={(text) => setUserData({ ...userData, username: text })}
        editable={isEditing}
      />
      
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={userData.email}
        onChangeText={(text) => setUserData({ ...userData, email: text })}
        editable={isEditing}
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter new password"
        secureTextEntry
        value={isEditing ? userData.password : '********'} 
        onChangeText={(text) => setUserData({ ...userData, password: text })}
        editable={isEditing}
      />

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={userData.phoneNumber}
        onChangeText={(text) => setUserData({ ...userData, phoneNumber: text })}
        keyboardType="phone-pad"
        editable={isEditing}
      />

      <Text style={styles.label}>Bus Name:</Text>
      <TextInput
        style={styles.input}
        value={userData.busName}
        onChangeText={(text) => setUserData({ ...userData, busName: text })}
        editable={isEditing}
      />

      <Button title={isEditing ? "Save" : "Edit"} onPress={isEditing ? handleSave : () => setIsEditing(true)} />
    </View>
  );
};

export default ProfileScreen;
