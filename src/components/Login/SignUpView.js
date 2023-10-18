import React, { useState } from "react";
import axios from "axios"; // You'll need to install axios if you haven't already
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router

export default function SignUpView(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("https://backend-partylux-staging.up.railway.app/v1/mobile/auth/signup", formData);

      if (response.status === 200) {
        navigate("/otp-verification");
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <>
      <h6 className="text-left text-light m-2">User name</h6>
      <input
        type="text"
        className="form-control business-form-control"
        name="username"
        id="UserName"
        placeholder="Zaman Habib"
        required="required"
        value={formData.username}
        onChange={handleInputChange}
      />
      <h6 className="text-left text-light m-2">Email</h6>
      <input
        type="email"
        className="form-control business-form-control"
        name="email"
        id="Email"
        placeholder="xyz@gmail.com"
        required="required"
        value={formData.email}
        onChange={handleInputChange}
      />
      <h6 className="text-left text-light m-2">Password</h6>
      <input
        type="password"
        className="form-control business-form-control mb-3"
        name="password"
        id="Password"
        placeholder="Password"
        required="required"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button
        className="become-partner-scroll-btn rounded-custom"
        style={{ width: "100%", borderRadius: "10px" }}
        onClick={handleSignUp}
      >
        Register
      </button>
    </>
  );
}
