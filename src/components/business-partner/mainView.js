
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
// import GoogleMap from './googlemap';

export default function MainView() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 8);
  };



  const components = [
    <FirstView handleNext={handleNext} />,
    <SecondView handleNext={handleNext} />,
    <ThirdView handleNext={handleNext} />,
    <FourthView handleNext={handleNext} />,
    <FifthView handleNext={handleNext} />,
    <BusinessEssentials handleNext={handleNext} />,
    <SixthView handleNext={handleNext} />,
    <ThankYou />,
  ];
  
  const handleStepClick = (newIndex) => {
    setCurrentIndex(newIndex);
  };





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
