import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginConfirmation from "../dialogBox/successfullylogin";


export default function LoginView(props) {
  const navigate = useNavigate();
  

  const [uploading, setUploading] = useState(false);
  const [businessCount, setBusinessCount] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [emilError, setEmailError] = useState(null); // State to track errors
  const [passwordError, setPasswordError] = useState(null); // State to track errors

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailError(null);
    setFormData({ ...formData, [name]: value });
  };

  const handlepasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordError(null);
    setFormData({ ...formData, [name]: value });
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogBox = () => {
   
    setIsDialogOpen(false);
  };

    


  const handleLogin = async () => {
    setUploading(true);
  
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
      const response = await axios.post(
        "https://backend-partylux-staging.up.railway.app/v1/mobile/auth/signin",
        {
          email: formData.email,
          password: formData.password,
        }
      );
  
      if (response.data.status === 200) {
        const data = response.data;
  
        if (data.data.isVerified === false) {
          localStorage.setItem("userId", data.data.userId);
          navigate("/otp-verification");
        }
  
        localStorage.setItem("authToken", data.data.authToken);
        await getBusinessCount();
  
        setIsDialogOpen(true);
        setUploading(false);
      } else {
        setUploading(false);
        props.setAlertErrorMessage("Wrong email or password");
    
      }
    } catch (error) {
      // Handle network errors
      props.setAlertErrorMessage("Wrong email or password");
      setUploading(false);
    }
  };

  const getBusinessCount = async ()=>{
    const authToken = localStorage.getItem('authToken');
  
    // Check if the token exists
    if (authToken) {
      // Define the headers with the token
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
  
      // Make the API request with the headers
      axios.get('https://backend-partylux-staging.up.railway.app/v1/mobile/business/my-business', {
        headers: headers,
      })
        .then((response) =>  {

          const count = response.data.data.length;
        
          setBusinessCount(count)

        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } else {
      // Handle the case where the token is missing from local storage
      console.error('Authentication token is missing');
    }
  }


  return (
    <>
      <h6 className="text-left text-light m-2 mt-5">Email</h6>
      <input
        type="email"
        className={`form-control business-form-control ${
          emilError ? "border-danger" : ""
        }`}
        name="email"
        id="Email"
        placeholder="xyz@gmail.com"
        required="required"
        value={formData.email}
        onChange={handleInputChange}
      />

{emilError && <p className="custom-error-text text-left mt-2">{emilError}</p>}

      <h6 className="text-left text-light m-2 mt-3">Password</h6>
      <input
        type="password"
        className={`form-control business-form-control  ${
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
 
    <div className="mt-4">
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
    </div>

      {isDialogOpen && (
        <LoginConfirmation
        title = "login Successfully"
          handleDialogBox={handleDialogBox}
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          businessCount = {businessCount}
        />
      )}
    </>
  );
}
