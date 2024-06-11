import { useEffect, useState } from 'react';
import PhoneInput from "react-phone-input-2"
import Send from './send';
import InputOtp from './OtpInput';
import otpApi from '../../../services/otpApi';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/AuthContext";
import './style.scss'
import ReplayIcon from '@mui/icons-material/Replay';

const OtpController = () => {
    const { isLoggedIn, login, logout } = useAuth();
    const [otp, setOtp] = useState('');
    const [appState, setAppState] = useState('review');
    const [otpVerifyDto, setOtpVerifyDto] = useState({});
    const location = useLocation();
    const { prevPath } = location.state || { prevPath: "/" };

    const tryAgain = () => {
        setAppState("review")
    }
    
    const getComponentFromAppState = () => {
        if(appState==='review'){
            return <Send setAppState={setAppState} setOtpVerifyDto={setOtpVerifyDto}/>;
        } else if(appState==='otpinput'){
            return <InputOtp setAppState={setAppState} otpVerifyDto={otpVerifyDto} prevPath={prevPath}/>;
        } else if(appState==='success'){
            return (<div>Successfully verfied</div>)
        }
        return (<>
            <div>Wrong OTP</div>
            <button onClick={tryAgain}>Try Again <ReplayIcon /></button>
        </>)
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


