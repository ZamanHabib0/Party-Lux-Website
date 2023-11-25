import React from "react";

export default function PromoTwo() {
  return (
    <>
      <section className="promo-section mt-5 ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10">
              <div className="section-heading mb-5">
                <span className="text-uppercase color-secondary sub-title">
                PARTY ESSENTIALS 
                </span>
                <h2 className="mb-6">
                WE'RE CHANGING THE WAY THE WORLD PARTIES, FOR THE BETTER
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-lg-0">
              <div className="card single-promo-card single-promo-hover">
                <div className="card-body">
                  <div className="pb-2">
                    <span className="ti-credit-card icon-md color-secondary"></span>
                  </div>
                  <div className="pt-2 pb-3">
                    <h5>EASY TO USE</h5>
                    <p className="text-muted mb-0">
                    WITH A COUPLE TAPS ON YOUR PHONE, YOU'LL KNOW WHERE THE BEST PARTY IS AT.                  
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-sm-6">
              <div className="card single-promo-card single-promo-hover mb-lg-0">
                <div className="card-body">
                  <div className="pb-2">
                    <span className="ti-control-record icon-md color-secondary"></span>
                  </div>
                  <div className="pt-2 pb-3">
                    <h5>Responsive</h5>
                    <p className="text-muted mb-0">
                      Quick is optimized to work for most devices.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-lg-4 col-sm-6">
              <div className="card single-promo-card single-promo-hover mb-lg-0">
                <div className="card-body">
                  <div className="pb-2">
                    <span className="ti-vector icon-md color-secondary"></span>
                  </div>
                  <div className="pt-2 pb-3">
                    <h5>Nearby Parties</h5>
                    <p className="text-muted mb-0">
                    WE CREATED A PLATFORM SPECIFICALLY FOR USERS AND BUSINESSES       
                    <br></br>
                    <br></br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="card single-promo-card single-promo-hover mb-lg-0">
                <div className="card-body">
                  <div className="pb-2">
                    <span className="ti-receipt icon-md color-secondary"></span>
                  </div>
                  <div className="pt-2 pb-3">
                    <h5>SIDE HUSTLE</h5>
                    <p className="text-muted mb-0">
                    GREEK LIFE OR SMALL GET TOGETHER? PARTY LUX ALLOWS YOU TO THROW YOUR OWN PARTIES
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
