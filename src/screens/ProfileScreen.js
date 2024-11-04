import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


const ProfileScreen = () => {
  const [username, setUsername] = useState('Angelic4');
  const [email, setEmail] = useState('angemendoza@gmail.com');
  const [password, setPassword] = useState(''); 
  const [phoneNumber, setPhoneNumber] = useState('0935353535');  
  const [busName, setBusName] = useState('2032');
  const [isEditing, setIsEditing] = useState(false);
  
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-start', 
  },
  profileImage: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginBottom: 20, 
  },
  label: {
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left', 
    width: '100%', 
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '100%', 
  },
});

export default ProfileScreen;
