import React from "react";

export default function Subsribe() {
  return (

    <>

      <div className="container news-letter-subscriber-box mb-5  " 
    
       style={{
         background:
           "url('assets/img/bg-subscriber.jpg')no-repeat center center / cover",
       }}
 
      >
        <div className="row  justify-content-between">
          <div className="col-md-6">
      
              <h2 className="text-light">
                Become A Partner
              </h2>

              <div className="single-feature mb-4 ">
                <div className="icon-box-wrap d-flex align-items-center mb-2">
                  <p className="mb-0">
                    You need a teacher! I can show you the ways of the Force! The Force. Lieutenant, get back to your station!
                  </p>
                </div>
              </div>

              
    <div className="row justify-content-center">
      <div className="col-12">
        <form
          action="#"
          method="post"
          className="subscribe-form subscribe-form-footer d-none d-md-block d-lg-block"
        >
          <div className="d-flex align-items-center">
            <input
              type="text"
              className="form-control input"
              id="email-footer"
              name="email"
              placeholder="info@yourdomain.com"
            />
            <input
              type="submit"
              className="button btn solid-btn"
              id="submit-footer"
              value="Subscribe"
            />
          </div>
        </form>
      </div>
    </div>

       
          

          </div>
          <div className="col-md-5">
            <div className="about-content-right">
              <img
                src="assets/img/news-letter-subscriber.png"
                alt="about us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
