import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

export default function LoginView(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://backend-partylux-staging.up.railway.app/v1/mobile/auth/signin", {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        // Store the authToken in localStorage
        localStorage.setItem("authToken", response.data.authToken);

        navigate("/");
      
      } else {
      alert("wRONG EMAIL PASSWORD")
        console.error("Login Error", response.data);
      }
    } catch (error) {
      // Handle network errors
      console.error("Network Error", error);
    }
  };

  return (
    <>
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
        className="form-control business-form-control mb-4"
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
        onClick={handleLogin}
      >
        LogIn
      </button>
    </>
  );
}
