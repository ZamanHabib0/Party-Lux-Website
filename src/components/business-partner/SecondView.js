import React, { useState } from "react";

export default function SecondView(props) {
  const [isClubSelected, setClubSelected] = useState(false);
  const [isBarSelected, setBarSelected] = useState(false);

  const toggleSelection = (type) => {
    if (type === "club") {
      setClubSelected(true);
      setBarSelected(false);
    } else if (type === "bar") {
      setClubSelected(false);
      setBarSelected(true);
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
          // value={formData.email}
          // onChange={handleInputChange}
        />
        <h5 className="text-light text-left pt-3">Select Business Type</h5>

        <div className="row d-flex justify-content-center pb-5">
          <button
            className={`selection-btn ${
              isClubSelected ? "selected-btn-bg" : "un-selected-btn-bg"
            }`}
            style={{ width: "43%" }}
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
            className={`selection-btn ${
              isBarSelected ? "selected-btn-bg" : "un-selected-btn-bg"
            }`}
            style={{ width: "43%" }}
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
