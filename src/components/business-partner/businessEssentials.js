import React, { useState } from "react";

export default function BusinessEssentials(props) {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedAge, setSelectedAgeLimit] = useState([]);
  const [AttendaceLimit, setSelectedAttendaceLimit] = useState([]);
  const interestsData = [
    { id: 'EDM', label: 'EDM', value: 'EDM' },
    { id: 'Country', label: 'Country', value: 'Country' },
    { id: 'HipHop', label: 'Hip Hop', value: 'HipHop' },
    { id: 'Pop', label: 'Pop', value: 'Pop' },
    { id: 'Rap', label: 'Rap', value: 'Rap' },
    { id: 'Rock', label: 'Rock', value: 'Rock' },
  ];

  const EntertainmentData = [
    { id: 'Billiards', label: 'Billiards', value: 'Billiards' },
    { id: 'PingPong', label: 'Ping Pong', value: 'PingPong' },
    { id: 'Beer', label: 'Beer', value: 'Beer' },
    { id: 'Cards', label: 'Cards', value: 'Cards' },
    { id: 'DARTS', label: 'DARTS', value: 'DARTS' },
    { id: 'Movie', label: 'Movie', value: 'Movie' },
    { id: 'LiveDJ', label: 'Live DJ', value: 'LiveDJ' },
    { id: 'SwimmingPool', label: 'Swimming Pool', value: 'SwimmingPool' },
  ];

  const DisclaimerData = [
    { id: 'BYOB', label: 'BYOB', value: 'BYOB' },
    { id: 'FREE', label: ' FREE', value: 'FREE' },
    { id: 'FOOD', label: 'FOOD', value: 'FOOD' },

  ];

  const AgeLimit = [
    { id: '10+Year', label: '10+ Year', value: '10+ Year' },
    { id: '15+Year', label: '15+ Year', value: '15+ Year' },
    { id: '18+Year', label: '18+ Year', value: '18+ Year' },
    { id: '30+Year', label: '30+ Year', value: '30+ Year' },
    { id: '50+Year', label: '50+ Year', value: '50+ Year' },

  ];

  const MaximumAttendance = [
    { id: '0-25People', label: '0-25 People', value: '0-25People' },
    { id: '25-50People', label: '25-50 People', value: '25-50People' },
    { id: '50-100People', label: '50-100 People', value: '50-100People' },
    { id: 'unlimited', label: 'unlimited', value: 'unlimited' },

  ];

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedInterests([...selectedInterests, value]);
    } else {
      setSelectedInterests(selectedInterests.filter((interest) => interest !== value));
    }
  };


  const handleAgeCheckbox = (event, category) => {
    const { value, checked } = event.target;
    if (checked) {
      // When a checkbox is checked, deselect all other checkboxes in the same category.
      setSelectedAgeLimit([value]);
    } else {
      // When a checkbox is unchecked, remove it from the selected interests.
      setSelectedAgeLimit(selectedAge.filter((interest) => interest !== value));
    }
  };

  const handleAttendaceCheckbox = (event, category) => {
    const { value, checked } = event.target;
    if (checked) {
      // When a checkbox is checked, deselect all other checkboxes in the same category.
      setSelectedAttendaceLimit([value]);
    } else {
      // When a checkbox is unchecked, remove it from the selected interests.
      setSelectedAttendaceLimit(AttendaceLimit.filter((interest) => interest !== value));
    }
  };

  return (
    <>
      <div className="partnerdata-container mt-5 p-3">
        {/* <h5 className="text-light text-left">Business Essentials</h5>
        <p className="text-left essential-des-color">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </p> */}

        <h5 className="text-light text-left m-0">Addmission Fee</h5>
        <p className="text-left essential-des-color">
        Here you can set the Admission fee for your party for both Male and fee male
        </p>


  <h5 className="text-light text-left m-0 male-color">Male</h5>

<div className="">
<div  className="form-check form-check-inline pt-2 col-3">
              <input
                type="checkbox"
                id= "malefree"
                name="interest"
                value= "malefree"
                className="form-check-input custom-checkbox-checked"
                // checked={selectedInterests.includes(interest.value)}
                // onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="malefree">
                <p className="pl-2 m-0">Free</p>
              </label>
            </div>

            <div  className="text-right form-check form-check-inline pt-2 col-8">
              <input
                type="checkbox"
                id= "male"
                name="interest"
                value= "male"
                className="form-check-input custom-checkbox-checked"
                // checked={selectedInterests.includes(interest.value)}
                // onChange={handleCheckboxChange}
              />
               <div className="pl-3" style={{width:"100%"}}>
          <h6 className="text-light text-left">Amount</h6>
        <input
          type="text"
          className="form-control business-form-control"
          name="amount"
          id="amount"
          placeholder="074357890"
          required="required"
          // value={formData.email}
          // onChange={handleInputChange}
        />
          </div>
            </div>
</div>

<h5 className="text-light text-left m-0 female-color">Female</h5>

<div className="">
<div  className="form-check form-check-inline pt-2 col-3">
              <input
                type="checkbox"
                id= "Femalefree"
                name="interest"
                value= "Femalefree"
                className="form-check-input custom-checkbox-checked"
                // checked={selectedInterests.includes(interest.value)}
                // onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="Femalefree">
                <p className="pl-2 m-0">Free</p>
              </label>
            </div>

            <div  className="text-right form-check form-check-inline pt-2 col-8">
              <input
                type="checkbox"
                id= "Female"
                name="interest"
                value= "Female"
                className="form-check-input custom-checkbox-checked"
                // checked={selectedInterests.includes(interest.value)}
                // onChange={handleCheckboxChange}
              />
               <div className="pl-3" style={{width:"100%"}}>
          <h6 className="text-light text-left">Amount</h6>
        <input
          type="text"
          className="form-control business-form-control"
          name="amount"
          id="amount"
          placeholder="074357890"
          required="required"
          // value={formData.email}
          // onChange={handleInputChange}
        />
          </div>
            </div>
</div>
         


  

        {/* Music */}
        <h5 className="text-light text-left mt-4">Music</h5>
        <div>
          {interestsData.map((interest, index) => (
            <div key={index} className="form-check form-check-inline pt-2 col-3">
              <input
                type="checkbox"
                id={interest.id}
                name="interest"
                value={interest.value}
                className="form-check-input custom-checkbox-checked"
                checked={selectedInterests.includes(interest.value)}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor={interest.id}>
                <p className="pl-2 m-0">{interest.label}</p>
              </label>
            </div>
          ))}
        </div>

        {/* Entertainment */}
        <h5 className="text-light text-left mt-4">Entertainment</h5>
        <div >
          {EntertainmentData.map((interest, index) => (
            <div key={index} className="form-check form-check-inline pt-2 col-3">
              <input
                type="checkbox"
                id={interest.id}
                name="interest"
                value={interest.value}
                className="form-check-input custom-checkbox-checked"
                checked={selectedInterests.includes(interest.value)}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor={interest.id}>
                <p className="pl-2 m-0">{interest.label}</p>
              </label>
            </div>
          ))}
        </div>

                {/* Disclaimer */}
                <h5 className="text-light text-left mt-4 ">Disclaimer</h5>
        <div >
          {DisclaimerData.map((interest, index) => (
            <div key={index} className="form-check form-check-inline pt-2 col-3">
              <input
                type="checkbox"
                id={interest.id}
                name="interest"
                value={interest.value}
                className="form-check-input custom-checkbox-checked"
                checked={selectedInterests.includes(interest.value)}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor={interest.id}>
                <p className="pl-2 m-0">{interest.label}</p>
              </label>
            </div>
          ))}
        </div>

                 {/* Age Limit */}
                 <h5 className="text-light text-left mt-4">Age Limit</h5>
        <div >
          {AgeLimit.map((interest, index) => (
            <div key={index} className="form-check form-check-inline pt-2 col-3">
              <input
                type="checkbox"
                id={interest.id}
                name="interest"
                value={interest.value}
                className="form-check-input custom-checkbox-checked"
                checked={selectedAge.includes(interest.value)}
                onChange={(e) => handleAgeCheckbox(e, 'AgeLimit')}
              />
              <label className="form-check-label" htmlFor={interest.id}>
                <p className="pl-2 m-0">{interest.label}</p>
              </label>
            </div>
          ))}
        </div>

                 {/* Maximum Attendance */}
                 <h5 className="text-light text-left mt-4 ">Maximum Attendance</h5>
        <div >
          {MaximumAttendance.map((interest, index) => (
            <div key={index} className="form-check form-check-inline pt-2 col-3">
              <input
                type="checkbox"
                id={interest.id}
                name="interest"
                value={interest.value}
                className="form-check-input custom-checkbox-checked"
                checked={AttendaceLimit.includes(interest.value)}
                onChange={(e) => handleAttendaceCheckbox(e, 'MaximumAttendance')}
              />
              <label className="form-check-label" htmlFor={interest.id}>
                <p className="pl-2 m-0">{interest.label}</p>
              </label>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          className="become-partner-scroll-btn rounded-custom mt-4"
          style={{ width: "100%", borderRadius: "10px" }}
          onClick={() => props.handleNext()}
        >
          Submit
        </button>
      </div>
    </>
  );
}
