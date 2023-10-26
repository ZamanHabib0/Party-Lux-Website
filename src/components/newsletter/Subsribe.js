import React, { useState } from "react";
import axios from "axios";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [subscribeError, setSubscribeError] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://backend-partylux-staging.up.railway.app/v1/mobile/support/newsletter", // Replace with your actual API endpoint
        { email }
      );

      if (response.status === 200) {
        setSubscribeSuccess(true);
        setSubscribeError(false);
        setEmail(""); // Clear the email input field

        // Automatically hide the success message after 3 seconds
        setTimeout(() => {
          setSubscribeSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setSubscribeSuccess(false);
      setSubscribeError(true);

      // Automatically hide the error message after 3 seconds
      setTimeout(() => {
        setSubscribeError(false);
      }, 3000);
    }
  };
  return (
    <>
      <div
        className="container news-letter-subscriber-box mb-5 mt-5 "
        style={{
          background:
            "url('assets/img/bg-subscriber.jpg') no-repeat center center / cover",
        }}
      >
        <div className="row  justify-content-between">
          <div className="col-md-6">
            <h2 className="text-light">Subscribe Party Lux?</h2>

            <div className="single-feature mb-4 ">
              <div className="icon-box-wrap d-flex align-items-center mb-2">
                <p className="mb-0">
                Stay in the loop and never miss a beat with our newsletter. Get ready to be the first in line for all the latest updates, events, and exciting happenings!
                </p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12">
                <form
                  onSubmit={handleSubscribe}
                  className="subscribe-form subscribe-form-footer d-none d-md-block d-lg-block"
                >
                  <div className="d-flex align-items-center">
                    <input
                      type="email"
                      className="form-control input"
                      id="email-footer"
                      name="email"
                      placeholder="info@yourdomain.com"
                      value={email}
                      onChange={handleInputChange}
                    />
                    <input
                      type="submit"
                      className="button btn solid-btn"
                      id="submit-footer"
                      value="Subscribe"
                    />
                  </div>
                </form>
                {/* {subscribeSuccess && (
                  <div className="alert alert-success mt-3" role="alert">
                    Subscribed successfully!
                  </div>
                )}
                {subscribeError && (
                  <div className="alert alert-danger mt-3" role="alert">
                    Subscription failed. Please try again later.
                  </div>
                )} */}
                 {subscribeSuccess && (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              Subscribed successfully!
              <button
                type="button"
                className="close"
               
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          {subscribeError && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
               Subscription failed. Please try again later.
              <button
                type="button"
                className="close"
               
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="about-content-right">
              <img
                src="assets/img/news-letter-subscriber.png"
                alt="about us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
