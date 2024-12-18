import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStateContext } from '../../Context/ContextProvider';
import styles from './LoginScreen.styles';
import axiosClient from '../../axios-client';

interface LoginScreenProps {
  navigation: {
    reset: (state: { index: number; routes: { name: string }[] }) => void;
  };
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [resetEmail, setResetEmail] = useState<string>('');
  const { setUser, setToken } = useStateContext(); // Assuming context is used for managing user and token state

  const handleLogin = async () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }
  
    const payload = { email, password };
  
    try {
      const { data } = await axiosClient.post("/login", payload);
      setUser(data.user); // Save user in context and AsyncStorage
      setToken(data.token); // Save token in context and AsyncStorage
  
      // Navigate based on role
      const role = data.user.role; // Assuming role comes from API
      if (role === "conductor") {
        navigation.reset({
          index: 0,
          routes: [{ name: "ConductorPage" }],
        });
      } else {
        Alert.alert(
          "Error",
          "You are not authorized to access this app as a conductor"
        );
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };
  

  const handlePasswordReset = () => {
    if (resetEmail === '') {
      Alert.alert('Error', 'Please enter your email to reset the password');
      return;
    }

    axios
      .post('/password/reset', { email: resetEmail }) // Adjust the endpoint if necessary
      .then(() => {
        Alert.alert('Reset Password', `A reset link has been sent to ${resetEmail}.`);
        setShowModal(false);
        setResetEmail('');
      })
      .catch(() => {
        Alert.alert('Error', 'Unable to send reset link. Please try again later.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AJOTCO</Text>
      <Text style={styles.subtitle}>Log In</Text>

      <Text style={styles.label}>YOUR EMAIL</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter you Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>PASSWORD</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.showPasswordToggle}
        >
          <Text>{showPassword ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Password Reset Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Reset Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              value={resetEmail}
              onChangeText={setResetEmail}
            />
            <TouchableOpacity style={styles.resetButton} onPress={handlePasswordReset}>
              <Text style={styles.resetButtonText}>Send Reset Link</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LoginScreen;
