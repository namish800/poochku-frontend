// services/petApi.js
import axios from 'axios';
import API_CONFIG from '../config/apiConfig';

console.log("API base URL:", API_CONFIG.baseUrl);

const instance = axios.create({
  baseURL: API_CONFIG.baseUrl,
});

const petApi = {
  getPetById: async (petId) => {
    try {
        
      const response = await instance.get(`/pet/${petId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  deletePet: async (petId) => {
    try {
      const response = await instance.delete(`/pet/${petId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  getPetListByService: async (serviceCode, page = 0, size = 10) => {
    try {
      const response = await instance.get('/pet', {
        params: {
          serviceCode,
          page,
          size,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  addNewPet: async (petDto) => {
    try {
        
      const response = await instance.post('/pet', petDto, {headers: {
            "content-type": "application/json",
        }});
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  updatePetDetails: async (petDto) => {
    try {
      const response = await instance.put('/pet', petDto, {headers: {
        "content-type": "application/json",
    }});
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  searchPets: async (serviceCode, location, breed, gender, quality, userId=null, petId=null, page = 0, size = 10) => {
    try {
      const response = await instance.get('/pet/search', {
        params: {
          serviceCode,
          location,
          breed,
          gender,
          quality,
          userId,
          petId,
          page,
          size
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};


export default petApi;
