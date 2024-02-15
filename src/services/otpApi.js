// services/authApi.js
import axios from 'axios';
import API_CONFIG from '../config/apiConfig';

console.log("API base URL:", API_CONFIG.baseUrl);

const instance = axios.create({
  baseURL: "https://cpaas.messagecentral.com",
});

const otpApi = {
  requestAuthenticationToken: async (country="IN", customerId="C-90DC00CD015643B", email="namishpruthi800@gmail.com", key="cHVsc2FyMjAwQE5T", scope="NEW") => {
    try {
      const response = await instance.get('/auth/v1/authentication/token', {
        params: {
          country,
          customerId,
          email,
          key,
          scope,
        },
        headers: {
          'Accept': '*/*',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  sendVerification: async (mobileNumber, token) => {
    const countryCode="91";
    const customerId="C-90DC00CD015643B";
    const flowType="SMS";
    const otpLength="4"; 
    try {
      const response = await instance.post('/verification/v2/verification/send', {},
       {
        params: {
            countryCode,
            customerId,
            flowType,
            mobileNumber,
            otpLength,
        },
        headers: {
          'authToken': token,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  validateOtp: async (mobileNumber, code, verificationId, token) => {
    try {
      const countryCode="91";
      const customerId="C-90DC00CD015643B";
      const response = await instance.get('/verification/v2/verification/validateOtp', {
        params: {
          countryCode,
          mobileNumber,
          verificationId,
          customerId,
          code,
        },
        headers: {
          'authToken': token,
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
