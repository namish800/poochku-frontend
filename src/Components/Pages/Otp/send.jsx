import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast from "react-hot-toast";
import otpApi from "../../../services/otpApi";

const Send = ({setAppState, setOtpVerifyDto}) => {
  const [phone, setPhone] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const sendOTP = async () => {
    console.log(phone)
    // const response = 
    // setAppState('otpinput');
    if (phone == "") {
      toast.error("please enter a phone number");
      return;
    }

    if (isButtonDisabled) {
      return;
    }

    try {
      setIsButtonDisabled(true);
      const mobileNumber=phone;
      const response = await otpApi.sendVerification(
        mobileNumber
      );
      toast.success("otp sent successfully");
      setOtpVerifyDto(response.data)
      console.log(response.data)
      setAppState('otpinput');
    } catch (error) {
      console.log(error);
    } finally {
      setIsButtonDisabled(false);
    }
  };

  return (
    <div>
      <div className="phone-container">
        <div className="phone-title">Enter Phone number</div>
        <div className="phone-subcontainer">
          <div className="phone-filed">
          <input type='text' 
              value={phone}
              placeholder="Phone Number"
              onChange={(e) => {setPhone(e.target.value)}}
            />
            
          </div>
          <div className="phone-btn">
            <button
              onClick={() => sendOTP()}
              id="signup-btn"
              disabled={isButtonDisabled}
            >
              <span>{isButtonDisabled ? "Sending..." : "Send OTP"}</span>
            </button>
          </div>
        </div>
      </div>
      <div id="recaptcha"></div>
    </div>
  );
};

export default Send;