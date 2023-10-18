import React, { useState } from 'react';
import LoginView from './LoginView.js';
import SignUpView from './SignUpView.js';
import OTPVerification from './otpVerfication.js';

export default function MainView() {
  const [selectedTab, setSelectedTab] = useState('login'); // 'login' or 'signup'

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleClick = (event, tab) => {
    event.preventDefault(); // Prevent the default behavior (page refresh)
    const newUrl = `/${tab}`; // Specify the new URL here

    window.history.pushState(null, '', newUrl);
    handleTabChange(tab);
  };

  // Check the URL to determine which component to display
  const currentURL = window.location.pathname;

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
              <div className="login-btn-div">
                {currentURL === '/otp-verification' ? (
                  <OTPVerification />
                ) : (
                  <>
                    <a
                      href="#"
                      rel="noopener noreferrer"
                      className={`btn login-btn ${selectedTab === 'login' ? 'selected-login-btn' : 'unselected-login-btn'}`}
                      onClick={(event) => handleClick(event, 'login')}
                    >
                      <b> Log In</b>
                    </a>
                    <a
                      href="#"
                      rel="noopener noreferrer"
                      className={`btn signup-btn ${selectedTab === 'signup' ? 'selected-login-btn' : 'unselected-login-btn'}`}
                      onClick={(event) => handleClick(event, 'signup')}
                    >
                      <b> Sign Up</b>
                    </a>
                    {selectedTab === 'login' ? <LoginView /> : <SignUpView />}
                  </>
                )}
              </div>
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
