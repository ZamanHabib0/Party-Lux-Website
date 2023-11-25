import React, { useState } from "react";

export default function ThirdView(props) {
  const [error, setError] = useState(null);

  const handleDescriptionChange = (event) => {
    const description = event.target.value;
  
    // Validation: Allow any characters and limit the length to 350 characters
    const isValidDescription = /^.{0,1250}$/.test(description);
  
    if (!isValidDescription) {
      if(props.businessDescription.length === 1250){
        setError("Please submit a concise 1250-character description.");
      }else{
        setError("Please enter a valid description");
      }
    
    } else {
      setError(null); // Reset error state if validation passes
      props.setBusinessDescription(description);
    }
  };

  const handleNext = () => {
    if (!props.businessDescription) {
      setError("Please enter your business description.");
    } else {
      setError(null); // Reset error state if validation passes
      props.handleNext();
    }
  };

  return (
    <>
      <div className="partnerdata-container mt-5 p-3">
        <h4 className="text-light text-left">Business Description</h4>

        <textarea
          className="business-description "
          placeholder="Write business description ..."
          value={props.businessDescription}
          onChange={handleDescriptionChange}
        ></textarea>
         <div  style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <p className="mt-1 mb-1">{props.businessDescription.length}/1250</p>
</div>
        
        {/* Error message for validation */}
        {error && (
          <div className="custom-error-text text-left mb-3">{error}</div>
        )}
        <div className="">
          <button
            className="become-partner-scroll-btn rounded-custom"
            style={{ width: "100%", borderRadius: "10px" }}
            onClick={() => {
              setError("")
              handleNext()
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
