import React, { useState } from "react";

export default function OTPInput() {
  const [otp, setOTP] = useState(["", "", "", ""]);

  const handleInputChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
  };

  const handleVerifyOTP = async () => {
    const otpValue = otp.join(''); // Combine OTP digits into a single string

    // Make an API request to verify the OTP
    try {
      const response = await fetch('https://backend-partylux-production.up.railway.app/v1/mobile/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp: otpValue }),
      });

      console.log(response.status)

      if (response.status === 200) {
   
        window.location.href = '/'; 
      } else {
        // OTP is not valid, show an alert
        alert('OTP is not valid. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
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
              <p className="otp-txt-color mt-4">Don't get the code? <a style={{ color: "#da13ec", fontWeight: "bold" }}>Resend</a></p>
              <button
                className="become-partner-scroll-btn rounded-custom mt-3"
                style={{ width: "100%", borderRadius: "10px" }}
                onClick={handleVerifyOTP}
              >
                Verify Now
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
    </>
  );
}
