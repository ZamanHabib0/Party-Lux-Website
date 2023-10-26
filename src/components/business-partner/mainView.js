
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

  const [businessHours, setBusinessHours] = useState({
    monday: { isOpen: false, openTime: '', closeTime: '' },
    tuesday: { isOpen: false, openTime: '', closeTime: '' },
    wednesday: { isOpen: false, openTime: '', closeTime: '' },
    thursday: { isOpen: false, openTime: '', closeTime: '' },
    friday: { isOpen: false, openTime: '', closeTime: '' },
    saturday: { isOpen: false, openTime: '', closeTime: '' },
    sunday: { isOpen: false, openTime: '', closeTime: '' },
  });


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
const [selectedAge, setSelectedAgeLimit] = useState([]);
const [selectedAttendanceLimit, setSelectedAttendanceLimit] = useState([]);
const [admissionFee, setAdmissionFee] = useState({
  male: { free: true , amount : 0 },
  female: { free: true  , amount : 0  },
});
const [selectedMusicOptions, setSelectedMusicOptions] = useState([]);
const [selectedEntertainmentOptions, setSelectedEntertainmentOptions] = useState([]);
const [selectedDisclaimerOptions, setSelectedDisclaimerOptions] = useState([]);






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

    const mergedObject = { ...combinedData, ...businessAddress, ...businessEssentials };

    console.log("mergedObject")
    console.log(mergedObject)

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

  const components = [
    <FirstView handleNext={handleNext} />,
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
    <SixthView createBusiness={createBusiness} error={error} uploading = {uploading} />,
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
