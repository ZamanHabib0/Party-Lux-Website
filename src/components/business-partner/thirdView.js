import React, { useState } from "react";

export default function ThirdView(props) {

  const [error, setError] = useState(null);

  const handleDescriptionChange = (event) => {
    props.setBusinessDescription(event.target.value);
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
          className="business-description mb-4"
          placeholder="Write business description ..."
          value={props.businessDescription}
          onChange={handleDescriptionChange}
        ></textarea>
          {/* Error message for validation */}
  {error && (
          <div className="custom-error-text text-left m-3">{error}</div>
        )}
        <button
          className="become-partner-scroll-btn rounded-custom"
          style={{ width: "100%", borderRadius: "10px" }}
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </>
  );
}
