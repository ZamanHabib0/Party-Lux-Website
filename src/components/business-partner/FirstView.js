import React from "react";

export default function FirstView(props) {
  return (
    <>
           <div className="partnerdata-container mt-5 p-3 " >
             <h5 className="text-light">{props.isUpdateBusiness ?   "Update Business" : "Become a Partner"}</h5>
             <img
                  src="assets/img/partner-support.png"
                  alt="img"
                  className= "partner-support-img"
                />
                <p className="text-left mb-4">
                {props.isUpdateBusiness ?   "Join us in our mission to change the clubbing industry. By updating your business with us, you'll gain access to a growing audience and unlock free marketing opportunities." : "Join us in our mission to change the clubbing industry. By Partnering with us, You’ll gain access to a growing Audience and unlock free Marketing Opportunities."}  </p>
                <button className= "become-partner-scroll-btn rounded-custom" style={{ width: "100%" , borderRadius : "10px"}}
                 onClick={() => props.handleNext()}>
              {props.isUpdateBusiness ?   "Continue Updating" : "Become a Partner"}    
                </button>

            </div>
    </>
  );
}
