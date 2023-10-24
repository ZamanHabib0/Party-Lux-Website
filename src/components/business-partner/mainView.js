
import React, { useState } from 'react';

import FirstView from "./FirstView";
import SecondView from "./SecondView.js";
import ThirdView from './thirdView';
import FourthView from './fourthView';
import FifthView from './fifthView';
import SixthView from './sixthView';
import ThankYou from './thankYou';
import StepsRow from './stepsRow';
import BusinessEssentials from './businessEssentials';
import axios from "axios";
// import GoogleMap from './googlemap';

export default function MainView() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [businessName, setBusinessName] = useState("");
  const [BusinessCategory, setBusinessCategory] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [businessWeek, setbusinessWeek] = useState([]);
  const [businessAddress, setbusinessAddress] = useState({});
  const [businessEssentials, setBusinessEssentials] = useState({});
  const [error, setError] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 8);
  };
  
  const handleStepClick = (newIndex) => {
    setCurrentIndex(newIndex);
  };


  const createBusiness = async () => {
    console.log('createBusiness function called');
  console.log('Current index:', currentIndex);
    // if (currentIndex < components.length - 1) {
    //   setCurrentIndex((prevIndex) => prevIndex + 1);
    // } else {
      // Create the combined object with collected data
      const combinedData = {
        businessWeek: businessWeek,
        note: businessDescription,
        bussinessName: businessName,
        bussinessCategory: BusinessCategory,
      };

      const mergedObject = { ...combinedData, ...businessAddress , ...businessEssentials };

      console.log("mergedObject")
      console.log(mergedObject)

      try {
        // Make a POST request to the API with authToken
        const authToken = localStorage.getItem('authToken');
        const response = await axios.post('http://localhost:8080/v1/mobile/business/create-business', mergedObject, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (response.data.status === 200) {
          if (currentIndex < components.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }
        } else {
          setError("Something went wrong.Business creation Faild")
          // console.error('API error:', response.data);
        }
      } catch (error) {
        setError("Something went wrong.Business creation Faild")
        // console.error('Network Error', error);
      }
    // }
  };

  const components = [
    <FirstView handleNext={handleNext} />,
    <SecondView handleNext={handleNext} businessName={businessName} setBusinessName={setBusinessName} BusinessCategory={BusinessCategory} setBusinessCategory={setBusinessCategory}/>,
    <ThirdView handleNext={handleNext} businessDescription={businessDescription} setBusinessDescription={setBusinessDescription}/>,
    <FourthView handleNext={handleNext} businessWeek={businessWeek} setbusinessWeek={setbusinessWeek} />,
    <FifthView handleNext={handleNext} businessAddress={businessAddress} setbusinessAddress = {setbusinessAddress}  />,
    <BusinessEssentials handleNext={handleNext} businessEssentials={businessEssentials} setBusinessEssentials = {setBusinessEssentials} />,
    <SixthView createBusiness={createBusiness}  error = {error} />,
    <ThankYou />,
  ];





  return (
    <>

      <div className="container"
      >

        <div>
          <img
            src="assets/img/logo-color-1x.png"
            width="230"
            alt="logo"
            className="img-fluid mt-5 mb-5"
          />
      <div className="d-flex justify-content-end">
          <div className="steps-row-div">
            <StepsRow currentIndex={currentIndex} onButtonClick={handleStepClick} />
          </div>
        </div>

        </div>

        <div className="row  justify-content-between">
          {/* <div className="col-md-1"></div> */}
          {currentIndex === components.length - 1 ? (
            <ThankYou />
          ) : (
            <>
              <div className="col-md-6">

                {components[currentIndex]}

              </div>


              <div className="col-md-6">

                <div className="partnerimg-container bg-light mt-5 " style={{
                  background:
                    "url('assets/img/partner-side.png')no-repeat center center / cover",
                }}>
                  <div className="partnerside-img" >

                    <div className="img-upperlayer" >
                    </div>

                  </div>
                </div>
              </div>
            </>

          )}

          {/* <div className="col-md-1"></div> */}
        </div>
      </div>

    </>
  );
}
