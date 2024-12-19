import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_URL = 'http://localhost:5000/auth';

export const register = async (username: string, email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.error || 'Registration failed');
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const { token } = response.data;
    await AsyncStorage.setItem('authToken', token);
    return token;
  } catch (error: any) {
    throw new Error(error.response?.data.error || 'Login failed');
  }
};
