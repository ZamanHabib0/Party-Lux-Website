import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginConfirmation from "../dialogBox/successfullylogin";

export default function OTPInput() {
  const navigate = useNavigate();
  const [otp, setOTP] = useState(["", "", "", ""]);
  const userId = localStorage.getItem("userId");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null); // State to track errors
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const handleDialogBox = () => {
   
    setIsDialogOpen(false);
  };


  const handleInputChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
  };

  const handleVerifyOTP = async () => {

      // Check if any of the OTP fields are empty
  if (otp.some(value => value === "")) {
    setError("Please fill in all OTP fields.");
    return; // Do not proceed with verification
  }

    setUploading(true);
    const otpValue = otp.join(''); // Combine OTP digits into a single string
  

  
    // Make an API request to verify the OTP
    try {
      const response = await axios.post(
        "https://backend-partylux-staging.up.railway.app/v1/mobile/auth/verify-otp",
        {
          userId: userId,
          Otp: otpValue,
        }
      );
  
      if (response.data.status === 200) {
        const data = response.data;
        localStorage.setItem("authToken", data.data.authToken);
        localStorage.removeItem("userId")
        navigate("/");
        setUploading(false);
      } else {
        setError("OTP is not valid. Please try again."); 
        setUploading(false);

      }
    } catch (error) {
      setError("OTP is not valid. Please try again."); 
      setUploading(false);
    }
  };
  

  return (
    <>
      <div className="container">
        <div>
          <img
            src="assets/img/logo-color-1x.png"
            width="230"
            alt="logo"
            className="img-fluid mt-5 mb-5"
          />
        </div>

        <div className="row justify-content-between">
          <div className="col-md-6">
            <div className="partnerdata-container mt-5 p-3">
              <h4 className="text-light text-left mt-3">Verify Code</h4>
              <p className=" text-left otp-txt-color">The confirmation code was sent via email</p>
              <div className="container">
                <div className="row">
                  {otp.map((value, index) => (
                    <div className="col" key={index}>
                      <input
                        type="text"
                        className="form-control text-center otp-txt-field"
                        maxLength="1"
                        value={value}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (/^\d*$/.test(inputValue)) {
                            handleInputChange(index, inputValue);
                            if (index < 3 && inputValue !== "") {
                              // Move focus to the next input field
                              document.getElementById(`otp-input-${index + 1}`).focus();
                            }
                          }
                        }}
                        id={`otp-input-${index}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {error && <p className="custom-error-text text-left m-3">{error}</p>}
              <p className="otp-txt-color mt-4">Don't get the code? <a style={{ color: "#da13ec", fontWeight: "bold" }}>Resend</a></p>
              <button
                className="become-partner-scroll-btn rounded-custom mt-3"
                style={{ width: "100%", borderRadius: "10px" }}
                onClick={()=> {
                  if(!uploading){
                    handleVerifyOTP()
                  }
                }}
                disabled={uploading} 
              >
               {uploading ? 'Please wait...' : 'Verify Now'}  
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="partnerimg-container bg-light mt-5"
              style={{
                background: "url('assets/img/partner-side.png') no-repeat center center / cover",
              }}
            >
              <div className="partnerside-img">
                <div className="img-upperlayer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isDialogOpen && (
        <LoginConfirmation
        title = "Registered Successfully"
          handleDialogBox={handleDialogBox}
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        />
      )}
    </>
  );
}
