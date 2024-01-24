// services/enquiryApi.js
import axios from 'axios';
import API_CONFIG from '../config/apiConfig';


const instance = axios.create({
  baseURL: API_CONFIG.baseUrl,
});

const enquiryApi = {
  saveBestPriceEnquiry: async (userId, petId) => {
    try {
      const response = await instance.post('/enquiry/best-price', null, {
        params: {
          userId,
          petId,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  saveSeeMoreEnquiry: async (userId, petId) => {
    try {
      const response = await instance.post('/enquiry/see-more', null, {
        params: {
          userId,
          petId,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  saveWhatsappEnquiry: async (userId, petId) => {
    try {
      const response = await instance.post('/enquiry/whatsapp-inquiry', null, {
        params: {
          userId,
          petId,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  saveFindAPetEnquiry: async (userId) => {
    try{
      const response = await instance.post('/enquiry/find-a-pet', null, {
        params: {
          userId
        }
      });
      return response.data;
    } catch (error){
      throw error;
    }
  } 
};

export default enquiryApi;
