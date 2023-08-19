// services/authApi.js
import axios from 'axios';
import API_CONFIG from '../config/apiConfig';

const instance = axios.create({
  baseURL: API_CONFIG.baseUrl,
});

const authApi = {
  login: async (loginRequest) => {
    try {
      const response = await instance.post('/auth/login', loginRequest);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default authApi;
