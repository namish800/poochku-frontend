import OtpInput from 'react-otp-input';
import { useEffect, useState } from 'react';
import PhoneInput from "react-phone-input-2"
import { Button } from '@mui/material';
import otpApi from '../../../services/otpApi';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

const InputOtp = ({setAppState, otpVerifyDto, prevPath}) => {
    const { isLoggedIn, login, logout } = useAuth();
    const [loading, setLoading] = useState(false)
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
        setLoading(true)
        // console.log(otp);
        const response = await otpApi.validateOtp(otpVerifyDto.mobileNumber, otp, otpVerifyDto.verificationId);
        if(response.responseCode===200){
            setUserInLocalStorage(response.user)
            setAppState('success');
            setLoading(false)
        } else {
            setAppState('failed');
            setLoading(false)
        }
    }
    return (
        <div className='otpVerificationWrapper'>
            <p>Enter OTP</p>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span>{`  `}</span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                    width: "2.5rem",
                    fontFamily: "changa one",
                    marginRight: "20px",
                    fontSize: "2rem"
                }}
              />
            <button onClick={verifyOtp} disabled={loading}> {loading ? <CircularProgress sx={{color: "white", height: "1rem !important", width: "1rem !important"}} />  : "Verify"} </button>
        </div>
    );
};

export default InputOtp;