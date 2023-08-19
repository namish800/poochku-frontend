// services/petApi.js
import axios from 'axios';
import API_CONFIG from '../config/apiConfig';

const instance = axios.create({
  baseURL: API_CONFIG.baseUrl,
});

const matingApi = {

  getSwipeListByPetId: async (petId) => {
    try {
      const response = await instance.get(`/swipe/${petId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  recordSwipeAction: async (swipeRequestDto) => {
    try {
      const response = await instance.post('/swipe', swipeRequestDto);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default matingApi;