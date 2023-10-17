import React from "react";

export default function ThirdView(props) {

  return (
    <>
      <div className="partnerdata-container mt-5 p-3 ">
        <h4 className="text-light text-left">Business Description</h4>
    
         <textarea class="business-description mb-4">Write business description ...</textarea>
        <button
          className="become-partner-scroll-btn rounded-custom "
          style={{ width: "100%", borderRadius: "10px" }}
          onClick={() => props.handleNext()}
        >
         Next
        </button>
      </div>
    </>
  );
}
