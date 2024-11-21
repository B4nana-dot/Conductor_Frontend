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
import { useStateContext } from '../../Context/ContextProvider';
import styles from './LoginScreen.styles';

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

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    const payload = { email, password };

    axios
      .post('http://10.0.2.2:8000/api/login', payload)
      .then(({ data }) => {
        setUser(data.user);
        console.log(data.user);
        setToken(data.token);

        // Navigate based on role
        const role = data.user.role; // Assuming role comes from API
        if (role === 'conductor') {
          Alert.alert('Login Successful', 'Welcome, Conductor!');
          navigation.reset({
            index: 0,
            routes: [{ name: 'ConductorPage' }],
          });
        } else {
          Alert.alert('Error', 'You are not authorized to access this app as a conductor');
        }
      })
      .catch((err) => {
        console.log('Login error:', err);  // Log the entire error object for better debugging
      
        const response = err.response;
      
        // Check if the response exists
        if (response) {
          if (response.status === 422) {
            // Validation error (e.g., invalid credentials)
            Alert.alert('Login Failed', response.data.message || 'Invalid credentials.');
          } else if (response.status === 400) {
            // Bad request error (e.g., missing parameters)
            Alert.alert('Login Failed', response.data.message || 'Bad request.');
          } else {
            // Handle other HTTP errors
            Alert.alert('Error', `Error: ${response.status} - ${response.data.message || 'Something went wrong.'}`);
          }
        } else {
          // If there is no response, check if it's a network error or timeout
          if (err.message && err.message.includes('Network Error')) {
            Alert.alert('Network Error', 'Please check your internet connection and try again.');
          } else {
            Alert.alert('Error', 'Something went wrong. Please try again later.');
          }
        }
      });
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
        placeholder="yourmail@domain.com"
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
