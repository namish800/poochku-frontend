import OtpInput from 'react-otp-input';
import { useEffect, useState } from 'react';
import PhoneInput from "react-phone-input-2"
import { Button } from '@mui/material';
import otpApi from '../../../services/otpApi';

const InputOtp = ({setAppState, token, otpVerifyDto}) => {
    const [otp, setOtp] = useState('');
    const verifyOtp = async () => {
        console.log(otp);
        const response = await otpApi.validateOtp(otpVerifyDto.mobileNumber, otp, otpVerifyDto.verificationId, token);
        if(response.responseCode===200){
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