import React, { useState } from "react";
import axios from "axios";

export default function Contact({ bgColor }) {
  // Define state variables to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://backend-partylux-staging.up.railway.app/v1/mobile/support/send-email-toSupport",
        formData
      );

      if (response.status === 200) {
        setSuccessMessage("Message sent successfully!");
        setErrorMessage(""); // Clear any previous error messages
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);

      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccessMessage(""); // Clear any previous success messages
      setErrorMessage("An error occurred while sending the message. Please try again.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }

   
  };


  return (
    <>
      <section
        id="contact"
        className={`contact-us ptb-100 ${bgColor ? "gray-light-bg" : ""}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 pb-3 message-box d-none">
              <div className="alert alert-danger"></div>
            </div>
            <div className="col-md-5">
              <div className="section-heading">
                <h2>Contact With Us</h2>
                <p>
                  It's very easy to get in touch with us. Just use the contact
                  form or pay us a visit for a coffee at the office. Dynamically
                  innovate competitive technology after an expanded array of
                  leadership.
                </p>
              </div>
              <div className="footer-address">
                <h6>
                  <strong>Head Office</strong>
                </h6>
                <p>1223 PICCADILLY DR HURLBURT FIELD, FL 32544</p>
                <ul>
                 
                  <li>
                    <span>
                      Email :
                      <a href="mailto:SUPPORT@PARTYLUX.APP">
                       SUPPORT@PARTYLUX.APP
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-7">
              <form
                action="#"
                method="POST"
                id="contactForm"
                className="contact-us-form"
                onSubmit={handleSubmit}
              >
                <h5>Reach us quickly</h5>
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        required="required"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        required="required"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="company"
                        className="form-control"
                        id="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="7"
                        cols="25"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mt-3">
                    <button
                      type="submit"
                      className="btn solid-btn"
                      id="btnContactUs"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              <p className="form-message"></p>
              {successMessage && (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              {successMessage}
              <button
                type="button"
                className="close"
                onClick={() => setSuccessMessage("")}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              {errorMessage}
              <button
                type="button"
                className="close"
                onClick={() => setErrorMessage("")}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
