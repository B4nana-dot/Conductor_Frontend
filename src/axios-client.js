import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Base URL of your Laravel API
const axiosClient = axios.create({
  baseURL: `http://10.0.2.2:8000/api`,
});

// Interceptor to add token to every request
axiosClient.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('ACCESS_TOKEN');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
