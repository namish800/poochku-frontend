import OtpInput from 'react-otp-input';
import { useEffect, useState } from 'react';
import PhoneInput from "react-phone-input-2"
import { Button } from '@mui/material';
import otpApi from '../../../services/otpApi';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/AuthContext";


const InputOtp = ({setAppState, otpVerifyDto, prevPath}) => {
    const { isLoggedIn, login, logout } = useAuth();
    const navigate = useNavigate();

    const [otp, setOtp] = useState('');

    const setUserInLocalStorage = (user) => {
        localStorage.setItem('userId', user?.userId);
        localStorage.setItem('email', user?.email);
        localStorage.setItem('fName', user?.fName);
        localStorage.setItem('lName', user?.lName);
        localStorage.setItem('phoneNo', user?.phoneNo);
        localStorage.setItem('role', user?.role);
        login()
        navigate(prevPath)
    }

    const verifyOtp = async () => {
        console.log(otp);
        const response = await otpApi.validateOtp(otpVerifyDto.mobileNumber, otp, otpVerifyDto.verificationId);
        if(response.responseCode===200){
            setUserInLocalStorage(response.user)
            setAppState('success');
        } else {
            setAppState('failed');
        }
    }
    return (
        <div>
            <div>Enter OTP</div>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
            <button onClick={verifyOtp}> Verify </button>
        </div>
    );
};

export default InputOtp;