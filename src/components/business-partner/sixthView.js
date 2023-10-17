import React from "react";

export default function SixthView(props) {
  return (
    <>
           <div className="partnerdata-container mt-5 p-3 " >
             <h5 className="text-light">Become a Partner</h5>
             <img
                  src="assets/img/partner-support.png"
                  alt="img"
                  className= "partner-support-img"
                />
                <p className="text-left mb-4">
                Just click Submit and we will Review your Application. You’ll Receive an Email if you have been Selected.</p>
                <button className= "become-partner-scroll-btn rounded-custom" style={{ width: "100%" , borderRadius : "10px"}}
                 onClick={() => props.handleNext()}>
                  Submit
                </button>

            </div>
    </>
  );
}
