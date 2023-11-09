
import React, { useState, useEffect } from 'react';

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
import { useNavigate, useLocation } from 'react-router-dom';

export default function MainView() {

  const locationObj = useLocation();

  const navigate = useNavigate();

  const isUpdateBusiness = locationObj.pathname.includes('update-business');


  const [currentIndex, setCurrentIndex] = useState(0);


  const [businessAddress, setbusinessAddress] = useState({});
  const [businessuploadedImages, setBusinessuploadedImages] = useState([]);
  const [businessEssentials, setBusinessEssentials] = useState({});
  const [error, setError] = useState(null);

  const [businessHours, setBusinessHours] = useState({
    monday: { isOpen: false, openTime: '', closeTime: '' },
    tuesday: { isOpen: false, openTime: '', closeTime: '' },
    wednesday: { isOpen: false, openTime: '', closeTime: '' },
    thursday: { isOpen: false, openTime: '', closeTime: '' },
    friday: { isOpen: false, openTime: '', closeTime: '' },
    saturday: { isOpen: false, openTime: '', closeTime: '' },
    sunday: { isOpen: false, openTime: '', closeTime: '' },
  });
  const [businessWeek, setbusinessWeek] = useState([]);
  const [businessName, setBusinessName] = useState("");
  const [BusinessCategory, setBusinessCategory] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  //fith component 
  const [images, setImages] = useState([]);
  const [location, setlocation] = useState({});
  // const [error, setError] = useState(null);
  const [imageURLs, setImageURLs] = useState([]);
  const [place, setPlace] = useState("");
  const [uploading, setUploading] = useState(false);
  const [center, setCenter] = useState({
    lat: 28.42835602,
    lng: 70.32902627
  });

  const [pointerLocation, setPointerLocation] = useState({
    lat: 28.42835602,
    lng: 70.32902627
  });

  const [zoom, setZoom] = useState(14);
  const [mapKey, setMapKey] = useState(1);
  const [completeaddress, setCompleteAddress] = useState("");

  // sixth component

  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedAge, setSelectedAgeLimit] = useState("");
  const [selectedAttendanceLimit, setSelectedAttendanceLimit] = useState("");
  const [admissionFee, setAdmissionFee] = useState({
    male: { free: true, amount: 0 },
    female: { free: true, amount: 0 },
  });
  const [selectedMusicOptions, setSelectedMusicOptions] = useState([]);
  const [selectedEntertainmentOptions, setSelectedEntertainmentOptions] = useState([]);
  const [selectedDisclaimerOptions, setSelectedDisclaimerOptions] = useState([]);

  useEffect(() => {


    if (isUpdateBusiness) {
      const authToken = localStorage.getItem('authToken');
      const businessId = localStorage.getItem('businessId');
      // Check if the token exists
      if (authToken) {
        // Define the headers with the token
        const businessID = businessId;
        const requestData = {
          businessId: businessID
        };

        const fetchBusinessData = async () => {
          try {
            const response = await axios.post('https://backend-partylux-staging.up.railway.app/v1/mobile/business/business-detail', requestData, {
              headers: {
                Authorization: `Bearer ${authToken}`
              }
            });

            if (response.data.status === 200) {
              const updatebusinessData = response.data.data;

              // Update your state variables with the new data
              setBusinessName(updatebusinessData.bussinessName);
              setBusinessCategory(updatebusinessData.bussinessCategory);
              setBusinessDescription(updatebusinessData.note);
              setBusinessHours({
                monday: { isOpen: !updatebusinessData.businessWeek[0].isClose, openTime: updatebusinessData.businessWeek[0].startTime, closeTime: updatebusinessData.businessWeek[0].endTime },
                tuesday: { isOpen: !updatebusinessData.businessWeek[1].isClose, openTime: updatebusinessData.businessWeek[1].startTime, closeTime: updatebusinessData.businessWeek[1].endTime },
                wednesday: { isOpen: !updatebusinessData.businessWeek[2].isClose, openTime: updatebusinessData.businessWeek[2].startTime, closeTime: updatebusinessData.businessWeek[2].endTime },
                thursday: { isOpen: !updatebusinessData.businessWeek[3].isClose, openTime: updatebusinessData.businessWeek[3].startTime, closeTime: updatebusinessData.businessWeek[3].endTime },
                friday: { isOpen: !updatebusinessData.businessWeek[4].isClose, openTime: updatebusinessData.businessWeek[4].startTime, closeTime: updatebusinessData.businessWeek[4].endTime },
                saturday: { isOpen: !updatebusinessData.businessWeek[5].isClose, openTime: updatebusinessData.businessWeek[5].startTime, closeTime: updatebusinessData.businessWeek[5].endTime },
                sunday: { isOpen: !updatebusinessData.businessWeek[6].isClose, openTime: updatebusinessData.businessWeek[6].startTime, closeTime: updatebusinessData.businessWeek[6].endTime },
              });
              setPlace(updatebusinessData.place);
              setlocation(updatebusinessData.location);
              setBusinessuploadedImages(updatebusinessData.photos);
              setAdmissionFee(updatebusinessData.admissionFee);
              setSelectedMusicOptions(updatebusinessData.music);
              setSelectedEntertainmentOptions(updatebusinessData.entertainment);
              setSelectedDisclaimerOptions(updatebusinessData.disclaimer);
              // 
              setSelectedAgeLimit(updatebusinessData.ageLimit);
              setSelectedAttendanceLimit(updatebusinessData.maxParticipants)

        

              // Update other state variables as needed

            } else {
              // Handle other response statuses if necessary
              console.error('API response status is not 200:', response.data.status);
            }
          } catch (error) {
            throw error;
          }
        }
        fetchBusinessData();
      } else {
        // Handle the case where the token is missing from local storage
        console.error('Authentication token is missing');
      }
    }
  }, []);





  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 8);
  };

  const handlePrevios = () => {
    if (currentIndex == 0) {

    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1) % 8);
    }
  };

  const handleStepClick = (newIndex) => {
    setCurrentIndex(newIndex);
  };


  const createBusiness = async () => {
    setUploading(true);
   
   
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

    const mergedObject = { ...combinedData, ...businessAddress, ...businessEssentials };


    try {
      // Make a POST request to the API with authToken
      const authToken = localStorage.getItem('authToken');
      const response = await axios.post('https://backend-partylux-staging.up.railway.app/v1/mobile/business/create-business', mergedObject, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.data.status === 200) {
        if (currentIndex < components.length - 1) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
          setUploading(false);
        }
      } else {
        setUploading(false);
        setError("Something went wrong.Business creation Faild")
        // console.error('API error:', response.data);
      }
    } catch (error) {
      setUploading(false);
      setError("Something went wrong.Business creation Faild")
      // console.error('Network Error', error);
    }
    // }
  };

  const updateBusinessWithToken =  () => {
    setUploading(true);

    // Retrieve the authentication token from local storage
    const authToken = localStorage.getItem('authToken');
    const businessId = localStorage.getItem('businessId');
  
    if (authToken) {
      // Define the request data
      const requestData = {
        bussinessName : businessName,
        bussinessCategory : BusinessCategory,
        note: businessDescription,
      photos: images,
      location : location,
      place: place,
      music: selectedInterests,
      ageLimit: selectedAge,
      maxParticipants : selectedAttendanceLimit,
      entertainment: selectedEntertainmentOptions,
      disclaimer: selectedDisclaimerOptions,
      admissionFee : admissionFee,
      businessWeek : businessHours

      };

      const combinedData = {
        businessWeek: businessWeek,
        note: businessDescription,
        bussinessName: businessName,
        bussinessCategory: BusinessCategory,
      };
  
      const mergedObject = { ...combinedData, ...businessAddress, ...businessEssentials };
      axios
        .put(`https://backend-partylux-staging.up.railway.app/v1/mobile/business/update-business/${businessId}`, mergedObject, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {

          if (response.data.status === 200) {
            const businessId = localStorage.removeItem('businessId');
            if (currentIndex < components.length - 1) {
              setCurrentIndex((prevIndex) => prevIndex + 1);
             
              setUploading(false);
            }
          } else {
            setUploading(false);
            setError("Something went wrong.Business creation Faild")
            // console.error('API error:', response.data);
          }

        })
        .catch((error) => {
          setUploading(false);
          // Handle errors, e.g., display an error message
          console.error('Error updating business:', error);
        });
    } else {
      setUploading(false);
      // Handle the case where the token is missing from local storage
      console.error('Authentication token is missing');
    }
  }
  

  const components = [
    <FirstView handleNext={handleNext} isUpdateBusiness ={isUpdateBusiness} />,
    <SecondView handleNext={handleNext} businessName={businessName} setBusinessName={setBusinessName} BusinessCategory={BusinessCategory} setBusinessCategory={setBusinessCategory} />,
    <ThirdView handleNext={handleNext} businessDescription={businessDescription} setBusinessDescription={setBusinessDescription} />,
    <FourthView handleNext={handleNext} businessWeek={businessWeek} setbusinessWeek={setbusinessWeek} businessHours={businessHours} setBusinessHours={setBusinessHours} />,
    <FifthView handleNext={handleNext} businessAddress={businessAddress} setbusinessAddress={setbusinessAddress} images={images}
      location={location}
      error={error}
      imageURLs={imageURLs}
      place={place}
      uploading={uploading}
      setImages={setImages}
      setlocation={setlocation}
      setError={setError}
      setImageURLs={setImageURLs}
      setPlace={setPlace}
      setUploading={setUploading}
      center={center}
      pointerLocation={pointerLocation}
      zoom={zoom}
      mapKey={mapKey}
      completeaddress={completeaddress}
      setCenter={setCenter}
      setPointerLocation={setPointerLocation}
      setZoom={setZoom}
      setMapKey={setMapKey}
      setCompleteAddress={setCompleteAddress}
      businessuploadedImages= {businessuploadedImages}
      setBusinessuploadedImages = {setBusinessuploadedImages}
    />,
    <BusinessEssentials handleNext={handleNext} businessEssentials={businessEssentials} setBusinessEssentials={setBusinessEssentials}
      selectedInterests={selectedInterests}
      setSelectedInterests={setSelectedInterests}
      selectedAge={selectedAge}
      setSelectedAgeLimit={setSelectedAgeLimit}
      selectedAttendanceLimit={selectedAttendanceLimit}
      setSelectedAttendanceLimit={setSelectedAttendanceLimit}
      admissionFee={admissionFee}
      setAdmissionFee={setAdmissionFee}
      selectedMusicOptions={selectedMusicOptions}
      setSelectedMusicOptions={setSelectedMusicOptions}
      selectedEntertainmentOptions={selectedEntertainmentOptions}
      setSelectedEntertainmentOptions={setSelectedEntertainmentOptions}
      selectedDisclaimerOptions={selectedDisclaimerOptions}
      setSelectedDisclaimerOptions={setSelectedDisclaimerOptions}
      error={error}
      setError={setError}
    />,
    <SixthView isUpdateBusiness = {isUpdateBusiness} updateBusinessWithToken = {updateBusinessWithToken} createBusiness={createBusiness} error={error} uploading={uploading} />,
    <ThankYou />,
  ];





  return (
    <>

      <div className="container"
      >

        <div>
          <img
          style={{ cursor:  "pointer" }} onClick={()=> navigate("/")}
            src="assets/img/logo-color-1x.png"
            width="230"
            alt="logo"
            className="img-fluid mt-5 mb-5"
          />
          <div className="d-flex justify-content-between">
            <div className='back-btn-partner'>
              {currentIndex == 7 ? (
                <span></span>
              ) : (
                <span className="ti-arrow-left text-white" onClick={handlePrevios} style={{ fontSize: "25px", cursor: "pointer" }}></span>
              )}
            </div>
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
