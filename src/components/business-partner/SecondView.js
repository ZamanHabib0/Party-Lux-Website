import React, { useState, useEffect } from "react";

export default function SecondView(props) {
  const [isClubSelected, setClubSelected] = useState(false);
  const [isBarSelected, setBarSelected] = useState(false);
  const [businessNameError, setbusinessNameError] = useState(null);
  const [businessCategoryError, setbusinessCategoryError] = useState(null);

  useEffect(() => {
    // Initialize the selected category based on the businessCategory prop
    if (props.businessCategory === "club") {
      setClubSelected(true);
      setBarSelected(false);
    } else if (props.businessCategory === "bar") {
      setClubSelected(false);
      setBarSelected(true);
    } else {
      // Default to "club" or another category if businessCategory is not provided
      setClubSelected(true);
      setBarSelected(false);
      props.setBusinessCategory("club");
    }
  }, [props.businessCategory]);
  

  const toggleSelection = (type) => {
    if (type === "club") {
      setClubSelected(true);
      setBarSelected(false);
      props.setBusinessCategory("club");
    } else if (type === "bar") {
      setClubSelected(false);
      setBarSelected(true);
      props.setBusinessCategory("bar");
    }
  };

  const handleNext = () => {
    if (!props.businessName) {
      setbusinessNameError("Please enter your business name.");
    } else if (!isClubSelected && !isBarSelected) {
      setbusinessCategoryError("Please select a business category.");
    } else {
      setbusinessNameError(null); 
      setbusinessCategoryError(null)
      props.handleNext();
    }
  };

  return (
    <>
      <div className="partnerdata-container mt-5 p-3">
        <h5 className="text-light text-left">Business Name</h5>
        <input
          type="text"
          className="form-control business-form-control"
          name="Business Name"
          id="Business Name"
          placeholder="Write Your Business Name"
          required="required"
          value={props.businessName}
          onChange={(e) => props.setBusinessName(e.target.value)}
        />
         {businessNameError && !props.businessName && (
            <div className="custom-error-text text-left mt-2">{businessNameError}</div>
          )}
        <h5 className="text-light text-left pt-3">Select Business Type</h5>

        <div className="row d-flex justify-content-between p-3">
          <button
            className={`selection-btn ${isClubSelected ? "selected-btn-bg" : "un-selected-btn-bg"
              }`}
            style={{ width: "45%" }}
            onClick={() => toggleSelection("club")}
          >
            <img
              src="assets/img/Select.png"
              width="14"
              alt="icon"
              className=""
            />
            <p className="d-inline p-2">Club</p>
          </button>

          <button
            className={`selection-btn ${isBarSelected ? "selected-btn-bg" : "un-selected-btn-bg"
              }`}
            style={{ width: "45%" }}
            onClick={() => toggleSelection("bar")}
          >
            <img
              src="assets/img/Select.png"
              width="14"
              alt="icon"
              className=""
            />
            <p className="d-inline p-2">Bar</p>
          </button>
        </div>


        {/* Error message for validation */}
        {businessCategoryError  && !isBarSelected && !isClubSelected && (
          <div className="custom-error-text text-left">{businessCategoryError}</div>
        )}
       <div className="pt-5">
       <button
          className="become-partner-scroll-btn rounded-custom "
          style={{ width: "100%", borderRadius: "10px" }}
          onClick={() => handleNext()}

        >
          Next
        </button>
       </div>
      </div>
    </>
  );
}
