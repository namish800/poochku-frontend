// services/authApi.js
import axios from 'axios';
import API_CONFIG from '../config/apiConfig';

console.log("API base URL:", API_CONFIG.baseUrl);

const instance = axios.create({
  baseURL: API_CONFIG.baseUrl,
});

const otpApi = {
  sendVerification: async (mobileNumber) => {
    try {
      const response = await instance.post('/otp/send', {},
       {
        params: {
            mobileNumber
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  validateOtp: async (mobileNumber, otp, verificationId) => {
    try {
      const countryCode="91";
      const response = await instance.post('/otp/verify', {
        countryCode,
        mobileNumber,
        verificationId,
        otp,
      },{
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default otpApi;
