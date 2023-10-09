import React from "react";

export default function Footer({ space }) {
  return (
    <>
     <div className="shape-img subscribe-wrap">
        <img
          src="assets/img/footer-top-shape.png"
          alt="footer shape"
          className="img-fluid"
        /></div>
      <footer className="footer-section">
        <div
          className={`footer-top background-img-2 ${space ? "pt-150" : "pt-60"}`}
          style={{
            background:
              "url('assets/img/footer-bg.png') no-repeat center top / cover",
          }}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
                <div className="footer-nav-wrap text-white">
                  <img
                    src="assets/img/logo-white-1x.png"
                    alt="footer logo"
                    width="120"
                    className="img-fluid mb-3"
                  />
                  <p>
                  Elevate your nightlife with Party Lux: discover the hottest events, secure tickets, and host your own parties effortlessly. Unleash the party animal in you!
                  </p>

                  {/* <div className="social-list-wrap">
                    <ul className="social-list list-inline list-unstyled">
                      <li className="list-inline-item">
                        <a href="#/" target="_blank" title="Facebook">
                          <span className="ti-facebook"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#/" target="_blank" title="Twitter">
                          <span className="ti-twitter"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#/" target="_blank" title="Instagram">
                          <span className="ti-instagram"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#/" target="_blank" title="printerst">
                          <span className="ti-pinterest"></span>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-sm-6 col-md-4 col-lg-4 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                    <div className="footer-nav-wrap text-white">
                      <h5 className="mb-3 text-white">Help & Info</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <a href="#contact">Contact Us</a>
                        </li>
                        <li className="mb-2">
                          <a href="/return-policy">Refund policy</a>
                        </li>
                        <li className="mb-2">
                          <a href="/disclaimer">Disclaimer</a>
                        </li>
                        <li className="mb-2">
                          <a href="/acceptable-use-policy">Acceptable Use Policy</a>
                        </li>
                        <li className="mb-2">
                          <a href="/end-user-license-agreement">End User License Agrement</a>
                        </li>
                       
                        
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                    <div className="footer-nav-wrap text-white">
                      <h5 className="mb-3 text-white">Company Info</h5>
                      <ul className="list-unstyled support-list">
                        <li className="mb-2">
                          <a href="#about">About Us</a>
                        </li>
                        <li className="mb-2">
                          <a href="/terms-and-conditions">Terms of Service</a>
                        </li>
                        <li className="mb-2">
                          <a href="/privacy-policy">Privacy Policy</a>
                        </li>
                        <li className="mb-2">
                          <a href="/cookie-policy">Cookie Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4">
                    <div className="footer-nav-wrap text-white">
                      <h5 className="mb-3 text-white">Contact</h5>
                      <ul className="list-unstyled support-list">
                        <li className="mb-2 d-flex align-items-center">
                          <span className="ti-location-pin mr-2"></span>
                          1223 PICCADILLY DR
                          <br />
                          HURLBURT FIELD, FL 32544
                        </li>
                       
                        <li className="mb-2 d-flex align-items-center">
                          <span className="ti-email mr-2"></span>
                          <a href="mailto:SUPPORT@PARTYLUX.APP">
                            {" "}
                            SUPPORT@PARTYLUX.APP
                          </a>
                        </li>
                        <li className="mb-2 d-flex align-items-center">
                          <span className="ti-world mr-2"></span>
                          <a href="/"> https://partylux.app</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom border-gray-light mt-5 py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-12 ">
                  <div className="copyright-wrap small-text ">
                    <p className="mb-0 text-white text-align-center" style={{textAlign : "center"}}>
                   <strong> ©2023 PARTYLUX. Website designed by Syncrozone</strong>
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
      
    </>
  );
}
