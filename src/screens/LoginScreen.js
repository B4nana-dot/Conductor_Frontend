import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Modal } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleLogin = () => {
    // Simulate login check
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter both email and password');
    } else {
      Alert.alert('Login Successful', 'Welcome to the HomePage!');

      navigation.reset({
        index: 0,
        routes: [{ name: 'HomePage' }],
      });
    }
  };

  const handlePasswordReset = () => {
    if (resetEmail === '') {
      Alert.alert('Error', 'Please enter your email to reset the password');
      return;
    }

    // Simulate password reset action
    Alert.alert('Reset Password', `A reset link has been sent to ${resetEmail}.`);
    setShowModal(false);
    setResetEmail('');
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    color: '#000',
    marginTop: 60,
  },
  subtitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 60,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  input: {
    height: 50, 
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
  },
  inputPassword: {
    flex: 1,
    height: 50, 
    paddingHorizontal: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  showPasswordToggle: {
    position: 'absolute',
    right: 10,
    padding: 10,
  },
  forgotPassword: {
    color: '#007bff',
    marginBottom: 20,
    textAlign: 'left',
  },
  loginButton: {
    height: 50,
    backgroundColor: '#0056ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: '#0056ff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cancelButton: {
    color: '#007bff',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;
