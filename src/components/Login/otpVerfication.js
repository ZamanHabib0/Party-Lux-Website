import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginConfirmation from "../dialogBox/successfullylogin";


export default function OTPInput(props) {
  const navigate = useNavigate();
  const [otp, setOTP] = useState(["", "", "", ""]);
  const userId = localStorage.getItem("userId");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null); // State to track errors
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const handleDialogBox = () => {
   
    setIsDialogOpen(false);
  };


  const handleInputChange =  (index, value) => {
    setError(null);
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
  
    if (value === "") {
      // If the current input field is cleared, move focus to the previous input field
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    } else {
      // If a digit is entered, move focus to the next input field
      if (index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleVerifyOTP = async () => {
    // Check if any of the OTP fields are empty
    if (otp.some(value => value === "")) {
      setError("Please fill in all OTP fields.");
      return; // Do not proceed with verification
    }
  
    setUploading(true);
    const otpValue = otp.join(''); // Combine OTP digits into a single string
  
    try {
      const response = await axios.post(
        "https://backend-partylux-staging.up.railway.app/v1/mobile/auth/verify-otp",
        {
          userId: userId,
          Otp: otpValue,
        }
      );
  
      const data = response.data;
  
      if (data.status === 200) {
        localStorage.setItem("authToken", data.data.authToken);
        localStorage.removeItem("userId");
        setIsDialogOpen(true)
      } else {
        // props.setAlertErrorMessage("OTP is not valid. Please try again.");
        setError("OTP is not valid. Please try again.");

      }
    } catch (error) {
      // props.setAlertErrorMessage("OTP is not valid. Please try again.");
      setError("OTP is not valid. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const [resendTimer, setResendTimer] = useState(30);

  useEffect(() => {
    let timer;

    if (resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [resendTimer]);

  const handleResendOTP = async () => {
    if (uploading || resendTimer > 0) {
      return; // Don't allow resend while uploading or during the timer
    }

    try {
      setUploading(true);

      // Call your OTP resend API here
      // Replace "yourResendApiUrl" with the actual URL for OTP resend
      const response = await axios.post("https://backend-partylux-staging.up.railway.app/v1/mobile/auth/resend-otp", {
        userId: userId,
      });

      // Handle the response as needed
      if (response.data.status === 200) {
        // Resend successful
        setResendTimer(30); // Reset the timer
      } else {
        setError("Failed to resend OTP. Please try again.");
      }
    } catch (error) {
      setError("Failed to resend OTP. Please try again.");
    } finally {
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
              <p className="otp-txt-color mt-4">
          Don't get the code?{" "}
          <span
            style={{
              color: "#da13ec",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={handleResendOTP}
          >
            Resend
          </span>{" "}
          {resendTimer > 0 ? `in ${resendTimer}s` : ""}
        </p>
              {/* <p className="otp-txt-color mt-4">Don't get the code? <a style={{ color: "#da13ec", fontWeight: "bold" }}><span  >Resend</span></a></p> */}
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
