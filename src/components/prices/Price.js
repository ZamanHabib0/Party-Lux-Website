import { HashLink } from 'react-router-hash-link';

export default function Price({ hasBg }) {
  return (
    <>
      <div className="overflow-hidden">
        <section
          id="pricing"
          className={`package-section ${
            hasBg ? "gray-light-bg" : "background-shape-right"
          } ptb-100`}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center mb-5">
                  <h2>
                    Affordable MemberShips
                  </h2>
                  <p className="lead">
                    We know our main audience are college students,we've made our membersip the price of one drink.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md">
                <div className="card text-center single-pricing-pack p-5" style={{backgroundColor : "black"}}>
                  {/* <h5 className="mb-2">Party Lux</h5> */}
                  <div className="pricing-img mt-3 mb-4 ">
                    <img
                      src="assets/img/logo-color-1x.png"
                      alt="pricing img"
                      className="img-fluid"
                    />
                  </div>

                  <div className="card-body p-0">
                    <ul className="list-unstyled text-sm pricing-feature-list text-light ">
                      <li><br /></li>
                      <li><br /></li>
                      <li >Nearby Parties</li>
                      <li>Throw your own party</li>
                      <li><br /></li>
                      <li><br /></li>
                      
                     {/* <div style="height: 100px; width: 10px;"></div> */}
                    </ul>
                    <div className="py-4 border-0 pricing-header">
                      <div className="h1 text-center mb-0 color-secondary text-light">
                        $<span className="price font-weight-bolder">O</span>
                      </div>
                    </div>
                    <a href="#/" className="button btn solid-btn" target=""  style={{color : "white"}}>
                     Already Unlocked
                    </a>
                    {/* <HashLink className= { "button btn solid-btn"   } 
                 smooth to='/'>
                      Already Unlocked
                  </HashLink> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md">
                <div className="card text-center popular-price single-pricing-pack p-5 " style={{backgroundColor : "black"}}>
                  {/* <h5 className="mb-2">Party Lux Vip</h5> */}
                  <div className="pricing-img mt-2 mb-4">
                    <img
                      src="assets/img/LuxVIP.png"
                      alt="pricing img"
                      className="img-fluid"
                    />
                  </div>

                  <div className="card-body p-0">
                    <ul className="list-unstyled text-sm pricing-feature-list text-light ">
                      <li>Nearby Parties</li>
                      <li>Party Ratios</li>
                      <li>Verified Photos</li>
                      <li>Throw your own party</li>
                      <li>Match with others</li>
                      <li>Event Analytics</li>
                    </ul>
                    <div className="py-4 border-0 pricing-header">
                      <div className="h1 text-center mb-0 color-secondary text-light">
                        $<span className="price font-weight-bolder">9.99 </span>
                      </div>
                    </div>
                    {/* <a href="#/" className="unlock-btn" target="_blank">
                      Unlock Now
                    </a> */}
                    <HashLink  className="button btn solid-btn" target=""  style={{color : "white"}}
                 smooth to='/'>
                     Unlock Now  
                  </HashLink>
                
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md">
                <div className="card text-center single-pricing-pack p-5">
                  <h5 className="mb-2">Unlimited</h5>
                  <div className="pricing-img mt-3 mb-4">
                    <img
                      src="assets/img/unlimited.svg"
                      alt="pricing img"
                      className="img-fluid"
                    />
                  </div>

                  <div className="card-body p-0">
                    <ul className="list-unstyled text-sm pricing-feature-list">
                      <li>20 Users access same time</li>
                      <li>Integrated eCommerce</li>
                      <li>Fully Customization interface</li>
                      <li>Free updated</li>
                      <li>24/7 Phone Support</li>
                      <li>Event Analytics</li>
                    </ul>
                    <div className="py-4 border-0 pricing-header">
                      <div className="h1 text-center mb-0 color-secondary">
                        $<span className="price font-weight-bolder">249</span>
                      </div>
                    </div>
                    <a href="#/" className="btn outline-btn" target="_blank">
                      Purchase now
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div className="mt-5 text-center">
              <p className="mb-2">
                If you need custom services or Need more?
                <a href="#/" className="color-secondary">
                  {" "}
                  Contact us{" "}
                </a>
              </p>
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
}
