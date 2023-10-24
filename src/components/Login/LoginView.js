import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginConfirmation from "../dialogBox/successfullylogin";


export default function LoginView(props) {
  const navigate = useNavigate();
  

  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null); // State to track errors

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogBox = () => {
   
    setIsDialogOpen(false);
  };

  


  const handleLogin = async () => {
    setUploading(true);
    try {
      const response = await axios.post(
        "https://backend-partylux-staging.up.railway.app/v1/mobile/auth/signin",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.data.status === 200) {
        const data = response.data;
      
        if(data.data.isVerified == false) {
          localStorage.setItem("userId", data.data.userId);
          navigate("/otp-verification");
        }

        localStorage.setItem("authToken", data.data.authToken);
        setIsDialogOpen(true);
        setUploading(false);

    
      } else {
        setError("Wrong email or password");
        setUploading(false);
      }
    } catch (error) {
      // Handle network errors
      setError("Wrong email or password"); 
      setUploading(false);
    }
  };

  return (
    <>
      <h6 className="text-left text-light m-2 mt-5">Email</h6>
      <input
        type="email"
        className={`form-control business-form-control ${
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
        className={`form-control business-form-control mb-4 ${
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
        className="become-partner-scroll-btn rounded-custom mb-3"
        style={{ width: "100%", borderRadius: "10px" }}
        onClick={()=>  
    {
      if(!uploading){
        handleLogin()
      }
    }
        }
        disabled={uploading} 
      >
        {uploading ? 'Please Wait...' : 'LogIn'}  
      </button>

      {isDialogOpen && (
        <LoginConfirmation
        title = "login Successfully"
          handleDialogBox={handleDialogBox}
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        />
      )}
    </>
  );
}
