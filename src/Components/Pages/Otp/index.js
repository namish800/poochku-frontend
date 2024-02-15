import { useEffect, useState } from 'react';
import PhoneInput from "react-phone-input-2"
import Send from './send';
import InputOtp from './OtpInput';
import otpApi from '../../../services/otpApi';

const OtpController = ({previousPath}) => {
    const [otp, setOtp] = useState('');
    const [token, setToken] = useState('');
    const [appState, setAppState] = useState('review');
    const [otpVerifyDto, setOtpVerifyDto] = useState({});
    const getOtpToken = async () => {
        const response = await otpApi.requestAuthenticationToken();
        console.log(response)
        setToken(response.token);
    }
    useEffect(()=>{
        getOtpToken();
      }, [])
    const getComponentFromAppState = () => {
        if(appState==='review'){
            return <Send setAppState={setAppState} token={token} setOtpVerifyDto={setOtpVerifyDto}/>;
        } else if(appState==='otpinput'){
            return <InputOtp setAppState={setAppState} token={token} otpVerifyDto={otpVerifyDto}/>;
        } else if(appState==='success'){
            return (<div>Successfully verfied</div>)
        }
        return <div>Wrong OTP</div>
    }
  return (
    <div>
        {   
            getComponentFromAppState()
        }
    </div>
  );
}
export default OtpController;


