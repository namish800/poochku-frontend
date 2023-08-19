// services/userApi.js
import axios from 'axios';
import API_CONFIG from '../config/apiConfig';

const instance = axios.create({
  baseURL: API_CONFIG.baseUrl,
});

const userApi = {
  createUser: async (userDto) => {
    try {
      const response = await instance.post('/user', userDto);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  updateUser: async (userDto) => {
    try {
      const response = await instance.put('/user', userDto);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  getUserById: async (userId) => {
    try {
      const response = await instance.get(`/user/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default userApi;
