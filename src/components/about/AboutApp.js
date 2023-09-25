import React from "react";

export default function AboutApp() {
  return (
    <>
      <section id="about" className="about-us ptb-100 gray-light-bg">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <span className="text-uppercase color-secondary sub-title">
                About Party Lux
              </span>
              <h2>Finding the best parties nearby has never been easier</h2>
              {/* <p className="mb-4 lh-190">
                Quick has all the right tools in order to make your website
                building process a breeze and automatize your time-consuming
                tasks in your development workflow.
              </p> */}
              <ul className="list-unstyled">
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-primary mr-3">
                        <span className="ti-check"></span>
                      </div>
                    </div>
                    <div>
                      <p className="mb-0">Party Ratios</p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-primary mr-3">
                        <span className="ti-check"></span>
                      </div>
                    </div>
                    <div>
                      <p className="mb-0">
                        Digital Marketing
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-primary mr-3">
                        <span className="ti-check"></span>
                      </div>
                    </div>
                    <div>
                      <p className="mb-0">
                        Finding house Parties
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-primary mr-3">
                        <span className="ti-check"></span>
                      </div>
                    </div>
                    <div>
                      <p className="mb-0">
                        Throw your own party
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-primary mr-3">
                        <span className="ti-check"></span>
                      </div>
                    </div>
                    <div>
                      <p className="mb-0">
                        Meeting new people
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="about-content-right">
                <img
                  src="assets/img/delivery-app.svg"
                  width="500"
                  alt="about us"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
