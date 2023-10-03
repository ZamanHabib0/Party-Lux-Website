import React from "react";

export default function FeatureImg({ ImgSource }) {
  return (
    <>
      <div id="features" className="feature-section ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center mb-5">
                {/* <span className="text-uppercase color-secondary sub-title">
                  Best features
                </span> */}
                <h2>Our Team Collectively Has Over 15 Year Experience Partying, We Make An App To Make Your Life Easier</h2>
                {/* <p>
                  Objectively deliver professional value with diverse
                  web-readiness. Collaboratively transition wireless customer
                  service without goal-oriented catalysts for change.
                  Collaboratively.
                </p> */}
              </div>
            </div>
          </div>
          <div className="row row-grid align-items-center">
            <div className="col-lg-4">
              <div className="d-flex align-items-start mb-5">
                <div className="pr-4">
                  <div className="icon icon-shape icon-color-1 rounded-circle">
                    <span className="ti-face-smile"></span>
                  </div>
                </div>
                <div className="icon-text">
                  <h5>Entering /Leaving Locations</h5>
                  <p className="mb-0">
                    Receive an alert whenever youre nearby a party so you don't get fomo!
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-5">
                <div className="pr-4">
                  <div className="icon icon-shape icon-color-2 rounded-circle">
                    <span className="ti-vector"></span>
                  </div>
                </div>
                <div className="icon-text">
                  <h5>Verfied Photos</h5>
                  <p className="mb-0">
                    With every ratio , theres a photo to go with it, getting rif of all those catfishes! 
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="pr-4">
                  <div className="icon icon-shape icon-color-3 rounded-circle">
                    <span className="ti-headphone-alt"></span>
                  </div>
                </div>
                <div className="icon-text">
                  <h5>FeedBack</h5>
                  <p className="mb-0">
                    Feel free to email us with any ideas to make party lux better.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="position-relative" style={{ zindex: 10 }}>
                <img
                  alt="placeholder"
                  src={ImgSource}
                  className="img-center "
                  style={{height : "93vh"}}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex align-items-start mb-5">
                <div className="pr-4">
                  <div className="icon icon-shape icon-color-4 rounded-circle">
                    <span className="ti-layout-media-right"></span>
                  </div>
                </div>
                <div className="icon-text">
                  <h5>Weekly Updates</h5>
                  <p className="mb-0">
                    We try our best to keep up with all the new party trends
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-5">
                <div className="pr-4">
                  <div className="icon icon-shape icon-color-5 rounded-circle">
                    <span className="ti-layout-cta-right"></span>
                  </div>
                </div>
                <div className="icon-text">
                  <h5>Party Ratios</h5>
                  <p className="mb-0">
                   With party ratios , you'll see that it's worth the drive
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="pr-4">
                  <div className="icon icon-shape icon-color-6 rounded-circle">
                    <span className="ti-palette"></span>
                  </div>
                </div>
                <div className="icon-text">
                  <h5>Comming Soon...</h5>
                  <p className="mb-0">
                    Spotted an attractive person at the Bar? Talking to them might be easier than you think.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
