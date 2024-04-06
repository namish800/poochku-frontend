// services/vetApi.js
import axios from 'axios';
import API_CONFIG from '../config/apiConfig';

// Extract the baseURL from API_CONFIG
const { baseUrl } = API_CONFIG;

const instance = axios.create({
  baseURL: baseUrl,
});

const vetApi = {
  createPetDoctor: async (doctorData) => {
    try {
      const response = await instance.post('/vet/doctor', doctorData, {headers: {
        "content-type": "application/json",
    }});
      return response;
    } catch (error) {
      throw error;
    }
  },

  createPetClinic: async (clinicData) => {
    try {
      const response = await instance.post('/vet/clinic', clinicData, {headers: {
        "content-type": "application/json",
    }});
      return response;
    } catch (error) {
      throw error;
    }
  },

  getDoctors: async (city, page = 0, size = 10) => {
    try {
      const response = await instance.get('/vet/doctor', {
        params: {
          city,
          page,
          size,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  updateDoctorDetails: async (doctorId, doctorData) => {
    try {
      const response = await instance.put(`/vet/doctor/${doctorId}`, doctorData, {headers: {
        "content-type": "application/json",
    }});
      return response;
    } catch (error) {
      throw error;
    }
  },

  getDoctorDetails: async (doctorId) => {
    try {
      const response = await instance.get(`/vet/doctor/${doctorId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  updateClinicDetails: async (clinicId, clinicData) => {
    try {
      const response = await instance.put(`/vet/clinic/${clinicId}`, clinicData, {headers: {
        "content-type": "application/json",
    }});
      return response;
    } catch (error) {
      throw error;
    }
  },

  getClinics: async (city, page = 0, size = 10) => {
    try {
      const response = await instance.get('/vet/clinic', {
        params: {
          city,
          page,
          size,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  getClinicDetails: async (clinicId) => {
    try {
      const response = await instance.get(`/vet/clinic/${clinicId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  addDoctorClinicAssociation: async (doctorId, clinicId) => {
    try {
      const response = await instance.post(`/vet/doctor/${doctorId}/clinic/${clinicId}`, null, {headers: {
        "content-type": "application/json",
    }});
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default vetApi;
