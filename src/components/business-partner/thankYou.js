import React from "react";

export default function ThankYou(props) {

  return (
    <>
        <div
        className="container news-letter-subscriber-box mb-5 mt-5 "
        style={{
          background:
            "url('assets/img/partner-thankU.png') no-repeat center center / cover",
        }}
      >
         <div className="text-center p-5">
            <h3 className="text-light">
            We Have Received Your <br/> Application
            </h3>
            
           <div className="pt-3">
           <a
                    href="/"
              
                    rel='noopener noreferrer'
                    className="btn google-play-btn mr-3"
                  >
                    Back to Home
                  </a>
           </div>
         </div>
      </div>
    </>
  );
}
