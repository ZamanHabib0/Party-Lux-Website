import React, { useEffect, useState } from 'react';
import BusinessCard from "../components/MyBusiness/BusinessCard.js";
import Navbar from "../components/layout/header/Navbar";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/team/PageHeader";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function BusinessList() {

  const [businesses, setBusinesses] = useState([]);
  const [currentDayData, setCurrentDayData] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [alertErrorMessage, setAlertErrorMessage] = useState("");
  const [setBusinessStateMessage, SetBusinessStateMessage] = useState("");
 
  const navigate = useNavigate();
  


  useEffect(() => {
    // Retrieve the token from local storage
    const authToken = localStorage.getItem('authToken');

    // Check if the token exists
    if (authToken) {
      // Define the headers with the token
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };

      document.body.style.overflow = 'auto';

      // Make the API request with the headers
      axios.get('https://backend-partylux-production.up.railway.app/v1/mobile/business/my-business', {
        headers: headers,
      })
        .then((response) => {

          const currentDay = (new Date().getDay() + 6) % 7;
          setCurrentDayData(currentDay)

          const updatedBusinesses = response.data.data.map((business) => {

          




            if (business.admissionFee.male.free) {
              return {
                ...business,
                admissionFee: {
                  ...business.admissionFee,
                  male: {
                    ...business.admissionFee.male,
                    amount: "Free", // Set a new value for amount (e.g., 100)
                  },
                },
              };
            }

            return business;

          });




          setBusinesses(updatedBusinesses);    // Assuming the API returns an array of businesses
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } else {
      // Handle the case where the token is missing from local storage
      console.error('Authentication token is missing');
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertErrorMessage(null);
      SetBusinessStateMessage(null);
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer if the component unmounts or the alert is closed manually
  }, [setBusinessStateMessage ,alertErrorMessage]);

  return (
    
      <Layout>
    
    <div className='d-flex justify-content-end m-4' style={{ width: "30%", position: 'fixed', top: 0, right: 0, zIndex: 9999 ,  }}>
        {alertErrorMessage && (
          <div className=''>
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              {alertErrorMessage}
            </div>
          </div>
        )}
      </div>

      <div className='d-flex justify-content-end m-4' style={{ width: "30%", position: 'fixed', top: 0, right: 0, zIndex: 9999 }}>
        {setBusinessStateMessage && (
          <div className=''>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              {setBusinessStateMessage}
            </div>
          </div>
        )}
      </div>


      <Navbar darkBg Home="/" Unlock='/#pricing' Features="/#features" Team="/#team" Contact="/#contact" BecomeApartner="/become-partner" />
    
      <div style={{overflow : "hidden"}}>
      <PageHeader HeaderTitle="My Business" Parent="Pages" PageTitle="My Business" />
      <div className="container mt-5"  >

        <div className="row">
          {businesses.map((business, index) => (
            <div key={index} className="col-md-6 pl-5 pr-5 pb-4">

              <BusinessCard
                businessId={business._id}
                name={business.bussinessName}
                bussinessCategory={business.bussinessCategory}
                place={business.place}
                price={business.admissionFee.male.amount}
                image={business.photos[0]}
                startTime={business.businessWeek[currentDayData].startTime}
                endTime={business.businessWeek[currentDayData].endTime}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                setAlertErrorMessage = {setAlertErrorMessage}
                SetBusinessStateMessage = {SetBusinessStateMessage}
/>
            </div>
          ))}
          <div className='col-md-6 pl-5 pr-5 pb-4'>
            <div className="row g-0 border create-business-listing-tile overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{ cursor: "pointer" }} onClick={() => {
              navigate("/become-partner");
            }} >

              <>
                <div className="col listing-tile-data d-flex flex-column position-static">
                  <div className='business-tile-creation-icon'>
                    <span className='ti-plus' style={{ fontSize: "30px" }} ></span>
                  </div>

                  <div className=' d-flex justify-content-between mt-3 mb-4 pt-3'>
                    <h5 className="card-text m-auto ">Register New Business</h5>
                  </div>
                </div>
              </>

            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  
  );
}

