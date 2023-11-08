import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUpView(props) {
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
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
    setUploading(true);
    try {
      const response = await axios.post("https://backend-partylux-staging.up.railway.app/v1/mobile/auth/signup", formData);

      if (response.data.status === 200) {
        const data = response.data;
        const userId = data.data.userId; // Get the userId from the response
  if(response.data.error){
    setError(response.data.msg);
    setUploading(false);

  }else{
    localStorage.setItem("userId", data.data.userId);
    navigate(`/otp-verification`);
    setUploading(false);
  }
        
      } else {
        setError("Signup failed, all fields are required");
        setUploading(false);
      }
    } catch (error) {
      setError("Signup failed, all fields are required");
      setUploading(false);
    }
  };

  return (
    <>
    <h6 className="text-left text-light m-2 mt-4">User name</h6>
      <input
        type="text"
        className= {`form-control business-form-control ${
          error ? "border-danger" : ""
        }`}
        name="username"
        id="UserName"
        placeholder="Zaman Habib"
        required="required"
        value={formData.username}
        onChange={handleInputChange}
      />
      <h6 className="text-left text-light m-2 mt-3">Email</h6>
      <input
        type="email"
        className= {`form-control business-form-control ${
          error ? "border-danger" : ""
        }`}
        name="email"
        id="Email"
        placeholder="xyz@gmail.com"
        required="required"
        value={formData.email}
        onChange={handleInputChange}
      />
      <h6 className="text-left text-light m-2 mt-3">Password</h6>
      <input
        type="password"
        className= {`form-control business-form-control mb-3 ${
          error ? "border-danger" : ""
        }`}
        name="password"
        id="Password"
        placeholder="Password"
        required="required"
        value={formData.password}
        onChange={handleInputChange}
      />

      {error && <p className="custom-error-text text-left">{error}</p>} {/* Display error message if error exists */}
      <button
        className="become-partner-scroll-btn rounded-custom mb-4 mt-2"
        style={{ width: "100%", borderRadius: "10px" }}
        onClick={()=> {
          if(!uploading)
{
  handleSignUp()
}        }}
disabled={uploading} 
      >
       {uploading ? 'Please Wait...' : 'Register'}  
      </button>
    </>
  );
}
