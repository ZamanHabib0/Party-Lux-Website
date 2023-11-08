import React , { useEffect, useState } from 'react';
import BusinessCard from "../components/MyBusiness/BusinessCard.js";
import Navbar from "../components/layout/header/Navbar";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/team/PageHeader";
import axios from 'axios';


export default function BusinessList() {

  const [businesses, setBusinesses] = useState([]);
  const [currentDayData, setCurrentDayData] = useState(0);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(()  =>  {
    // Retrieve the token from local storage
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




  

  


  return (
    <Layout>
      <Navbar darkBg  Home = "/"  Unlock = '/#pricing'  Features = "/#features"  Team = "/#team"  Contact = "/#contact" BecomeApartner = "/become-partner" />
      <PageHeader HeaderTitle="My Business" Parent="Pages" PageTitle="My Business" />
         <div className="container mt-5">
     
      <div className="row">
        {businesses.map((business, index) => (
          <div key={index} className="col-md-6 pl-5 pr-5 pb-4">
            
            <BusinessCard
             businessId = {business._id}
              name={business.bussinessName}
              bussinessCategory={business.bussinessCategory}
              place={business.place}
              price={business.admissionFee.male.amount}
              image={business.photos[0]} 
              startTime={business.businessWeek[currentDayData].startTime}
              endTime={business.businessWeek[currentDayData].endTime}
              isLoading = {isLoading}
              setIsLoading = {setIsLoading}

            />
          </div>
        ))}
      </div>
    </div>
 
    </Layout>
  );
}

