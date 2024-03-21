import axios from 'axios';
import API_CONFIG from '../config/apiConfig';

const instance = axios.create({
  baseURL: API_CONFIG.baseUrl,
});

const ratingsApi = {
  getRatingsForSeller: async (sellerId) => {
    try {
      const response = await instance.get(`/seller/${sellerId}/rating`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addRating: async (sellerId, ratingDto) => {
    try{
      const response = await instance.post(`/seller/${sellerId}/rating`, ratingDto, {headers: {
        "content-type": "application/json",
    }});
    return response.data;
    } catch (err) {
      throw err;
    }
  },
};
export default ratingsApi;
