import axios from 'axios';

const API_BASE_URL = 'http://localhost:5100';

const registerUser = async (username: string, email: string, password: string, ) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.error || 'Registration failed';
  }
};

export default {
  registerUser,
};
