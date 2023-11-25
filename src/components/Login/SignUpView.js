import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUpView(props) {
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [userNameError, setUserNameError] = useState(null); // State to track errors
  const [emilError, setEmailError] = useState(null); // State to track errors
  const [passwordError, setPasswordError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserNameError(null);
    setFormData({ ...formData, [name]: value });
  };

  const handleEamilChange = (e) => {
    const { name, value } = e.target;
    setEmailError(null);
    setFormData({ ...formData, [name]: value });
  };

  const handlepasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordError(null);
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async () => {
    setUploading(true);

    
    if (formData.username.length < 4) {
      setUserNameError("Username must be at least 4 characters long");
      console.log("Before setUploading(false)");
      setUploading(false);
      console.log("After setUploading(false)");
      return;
    }
    

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email address");
      setUploading(false);
      return;
    }
  
    // Password validation
    if (formData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      setUploading(false);
      return;
    }



    try {
      const response = await axios.post("https://backend-partylux-staging.up.railway.app/v1/mobile/auth/signup", formData);

      if (response.data.status === 200) {
        const data = response.data;
  if(response.data.error){
    props.setAlertErrorMessage(response.data.msg);
    setUploading(false);

  }else{
    localStorage.setItem("userId", data.data.userId);
    navigate(`/otp-verification`);
    setUploading(false);
  }
        
      } else {
        props.setAlertErrorMessage("Signup failed, all fields are required");
        setUploading(false);
      }
    } catch (error) {
      props.setAlertErrorMessage("Signup failed, all fields are required");
      setUploading(false);
    }
  };

  return (
    <>
    <h6 className="text-left text-light m-2 mt-4">User name</h6>
      <input
        type="text"
        className= {`form-control business-form-control ${
          userNameError ? "border-danger" : ""
        }`}
        name="username"
        id="UserName"
        placeholder="Zaman Habib"
        required="required"
        value={formData.username}
        onChange={handleInputChange}
      />
      {userNameError && <p className="custom-error-text text-left mt-2">{userNameError}</p>}

      <h6 className="text-left text-light m-2 mt-3">Email</h6>
      <input
        type="email"
        className= {`form-control business-form-control ${
          emilError ? "border-danger" : ""
        }`}
        name="email"
        id="Email"
        placeholder="xyz@gmail.com"
        required="required"
        value={formData.email}
        onChange={handleEamilChange}
      />
      {emilError && <p className="custom-error-text text-left mt-2">{emilError}</p>}

      <h6 className="text-left text-light m-2 mt-3">Password</h6>
      <input
        type="password"
        className= {`form-control business-form-control mb-3 ${
          passwordError ? "border-danger" : ""
        }`}
        name="password"
        id="Password"
        placeholder="Password"
        required="required"
        value={formData.password}
        onChange={handlepasswordChange}
      />

{passwordError && <p className="custom-error-text text-left mt-2">{passwordError}</p>}


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
