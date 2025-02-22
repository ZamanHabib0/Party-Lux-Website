import React, { useState } from "react";
import axios from "axios";

export default function Contact(props) {
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
        "https://backend-partylux-production.up.railway.app/v1/mobile/support/send-email-toSupport",
        formData
      );

      if (response.status === 200) {
        props.successAlertErrorMessage("Message sent successfully!");
        props.setdangerAlertErrorMessage(""); // Clear any previous error messages
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });

        setTimeout(() => {
          props.successAlertErrorMessage("");
        }, 3000);

      }
    } catch (error) {
      console.error("Error sending message:", error);
      props.successAlertErrorMessage(""); // Clear any previous success messages
      props.setdangerAlertErrorMessage("An error occurred while sending the message. Please try again.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }




  };

  const handlePhoneField = (event) => {
    const { name, value } = event.target;

    // Check if the entered value contains only numbers and operators
    if (/^[0-9+*/-]*$/.test(value)) {
      // Update the formData with the valid input
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleTextareaChange = (event) => {
    const { name, value } = event.target;
  
    // Validate input length and content
    if (value.length <= 750 && !/<[^>]*>/g.test(value)) {
      // Update the formData with the valid input
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };


  return (
    <>
      <section
        id="contact"
        className={`contact-us ptb-100 gray-light-bg `}
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
                  Reach out effortlessly! Use our contact form or stop by for coffee at our office. We're here to innovate and would love to connect with you!
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
                      support@partylux.app
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
                        onChange={handlePhoneField}
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
                        onChange={handleTextareaChange}
                      ></textarea>
                     <div className="mt-2" style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <p>{formData.message.length}/750</p>
</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 ">
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
                    onClick={() => props.successAlertErrorMessage("")}
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
                    onClick={() => props.setdangerAlertErrorMessage("")}
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
