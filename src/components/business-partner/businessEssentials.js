import React, { useState } from "react";

export default function BusinessEssentials(props) {
  const {
    selectedInterests,
    setSelectedInterests,
    selectedAge,
    setSelectedAgeLimit,
    selectedAttendanceLimit,
    setSelectedAttendanceLimit,
    admissionFee,
    setAdmissionFee,
    selectedMusicOptions,
    setSelectedMusicOptions,
    selectedEntertainmentOptions,
    setSelectedEntertainmentOptions,
    selectedDisclaimerOptions,
    setSelectedDisclaimerOptions,
    error,
    setError,
    alertErrorMessage,
    setAlertErrorMessage

  } = props;

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
    { id: '0-25People', label: '0-25 People', value: '0-25' },
    { id: '25-50People', label: '25-50 People', value: '25-50' },
    { id: '50-100People', label: '50-100 People', value: '50-100' },
    { id: 'unlimited', label: 'unlimited', value: 'unlimited' },
  ];

  const checkAllboxChecked = () => {
    // const interestsSelected = selectedInterests.length > 0;
    const ageSelected = selectedAge.length > 0;
    const attendanceSelected = selectedAttendanceLimit.length > 0;
    // const musicSelected = selectedMusicOptions.length > 0;
    // const entertainmentSelected = selectedEntertainmentOptions.length > 0;
    // const disclaimerSelected = selectedDisclaimerOptions.length > 0;

    if (!admissionFee.male.free && admissionFee.male.amount === "" || !admissionFee.female.free && admissionFee.female.amount === "") {
      setAlertErrorMessage("Please enter Price of Business ticket");
    } else if (
      selectedAge.length == 0 ||
      selectedAttendanceLimit.length == 0 ||
      selectedMusicOptions.length == 0 ||
      selectedEntertainmentOptions.length == 0 ||
      selectedDisclaimerOptions.length == 0) {
      setAlertErrorMessage("Please select at least one option from every block.");
    } else {
      setAlertErrorMessage(null);
      // setbusinessNameError(null); 
      // setbusinessCategoryError(null)

      props.handleNext();
    }
  };

  const handleCheckboxChange = (event, category) => {
    const { value, checked } = event.target;

    setSelectedInterests((prevInterests) => {
      if (checked) return [...prevInterests, value];
      return prevInterests.filter((interest) => interest !== value);
    });

    if (checked) {
      if (category === "music") {
        setSelectedMusicOptions((prevOptions) => [...prevOptions, value]);
      } else if (category === "entertainment") {
        setSelectedEntertainmentOptions((prevOptions) => [...prevOptions, value]);
      } else if (category === "disclaimer") {
        setSelectedDisclaimerOptions((prevOptions) => [...prevOptions, value]);
      }
    } else {
      if (category === "music") {
        setSelectedMusicOptions((prevOptions) =>
          prevOptions.filter((option) => option !== value)
        );
      } else if (category === "entertainment") {
        setSelectedEntertainmentOptions((prevOptions) =>
          prevOptions.filter((option) => option !== value)
        );
      } else if (category === "disclaimer") {
        setSelectedDisclaimerOptions((prevOptions) =>
          prevOptions.filter((option) => option !== value)
        );
      }
    }
  };

  const handleAgeCheckbox = (event, category) => {
    const { value, checked } = event.target;
    setSelectedAgeLimit((prevAge) => {
      if (checked) return value;
      return "";
    });
  };

  const handleAttendaceCheckbox = (event, category) => {
    const { value, checked } = event.target;
    setSelectedAttendanceLimit((prevAttendance) => {
      if (checked) return value;
      return "";
    });
  };

  const handleSubmit = () => {




    const data = {
      maxParticipants: selectedAttendanceLimit || "0-25",
      admissionFee: {
        male: { free: admissionFee.male.free, amount: admissionFee.male.amount },
        female: { free: admissionFee.female.free, amount: admissionFee.female.amount },
      },
      music: selectedMusicOptions, // Use the selected options from state
      disclaimer: selectedDisclaimerOptions, // Use the selected options from state
      entertainment: selectedEntertainmentOptions, // Use the selected options from state
      ageLimit: selectedAge || "15+ Year",
      cancelationPolicy: "24 hrs",
    };



    props.setBusinessEssentials(data);


  };

  return (
    <>
      <div className="partnerdata-container mt-5 p-3">
        <h5 className="text-light text-left m-0">Admission Fee</h5>
        <p className="text-left essential-des-color">
          Here you can set the Admission fee for your party for both Male and Female.
        </p>

        <div className="">
          <h5 className="text-light text-left m-0 male-color">Male</h5>
          <div className="">
            <div className="form-check form-check-inline pt-2 col-3">
              <input
                type="checkbox"
                id="malefree"
                name="malefree"
                className="form-check-input custom-checkbox-checked"
                checked={admissionFee.male.free}
                onChange={(e) =>
                  setAdmissionFee({
                    ...admissionFee,
                    male: { ...admissionFee.male, free: e.target.checked },
                  })
                }
              />
              <label className="form-check-label" htmlFor="malefree">
                <p className="pl-2 m-0">Free</p>
              </label>
            </div>

            <div className="text-right form-check form-check-inline pt-2 col-8">
              <input
                type="checkbox"
                id="male"
                name="male"
                className="form-check-input custom-checkbox-checked"
                checked={!admissionFee.male.free}
                onChange={(e) =>
                  setAdmissionFee({
                    ...admissionFee,
                    male: { ...admissionFee.male, free: !e.target.checked },
                  })
                }
              />
              <div className="pl-3" style={{ width: "100%" }}>
                <h6 className="text-light text-left">Amount</h6>
                <input
                  type="text"
                  className="form-control business-form-control"
                  name="amount"
                  id="amount"
                  placeholder="Enter Amount"
                  required="required"
                  value={admissionFee.male.amount}
                  onChange={(e) => {
                    // Allow digits (0-9) and a dot for decimal point
                    const inputValue = e.target.value.replace(/[^0-9.]/g, '');

                    setAdmissionFee({
                      ...admissionFee,
                      male: { ...admissionFee.male, amount: inputValue },
                    });
                  }}
                />

              </div>
            </div>
          </div>
          {/* {!admissionFee.male.free && admissionFee.male.amount === "" && (
          <p className="text-danger">Please enter the price.</p>
        )} */}

          <h5 className="text-light text-left m-0 female-color">Female</h5>

          <div className="">
            <div className="form-check form-check-inline pt-2 col-3">
              <input
                type="checkbox"
                id="Femalefree"
                name="Femalefree"
                className="form-check-input custom-checkbox-checked"
                checked={admissionFee.female.free}
                onChange={(e) =>

                  setAdmissionFee({
                    ...admissionFee,
                    female: { ...admissionFee.female, free: e.target.checked },
                  })
                }
              />
              <label className="form-check-label" htmlFor="Femalefree">
                <p className="pl-2 m-0">Free</p>
              </label>
            </div>

            <div className="text-right form-check form-check-inline pt-2 col-8">
              <input
                type="checkbox"
                id="Female"
                name="Female"
                className="form-check-input custom-checkbox-checked"
                checked={!admissionFee.female.free}
                onChange={(e) =>
                  setAdmissionFee({
                    ...admissionFee,
                    female: { ...admissionFee.female, free: !e.target.checked },
                  })
                }
              />
              <div className="pl-3" style={{ width: "100%" }}>
                <h6 className="text-light text-left">Amount</h6>
                <input
                  type="text"
                  className="form-control business-form-control"
                  name="amount"
                  id="amount"
                  placeholder="Enter Amount"
                  required="required"
                  value={admissionFee.female.amount}
                  onChange={(e) => {
                    // Allow digits (0-9) and a dot for decimal point
                    const inputValue = e.target.value.replace(/[^0-9.]/g, '');

                    setAdmissionFee({
                      ...admissionFee,
                      female: { ...admissionFee.female, amount: inputValue },
                    });
                  }}
                />

              </div>
            </div>
          </div>
        </div>

        <h5 className="text-light text-left mt-4">Music</h5>
        <div>
          {interestsData.map((interest, index) => (
            <div key={index} className="form-check form-check-inline pt-2 col-4">
              <input
                type="checkbox"
                id={interest.id}
                name="interest"
                value={interest.value}
                className="form-check-input custom-checkbox-checked"
                checked={selectedMusicOptions.includes(interest.value)}
                onChange={(e) => handleCheckboxChange(e, 'music')}
              />
              <label className="form-check-label" htmlFor={interest.id}>
                <p className="pl-2 m-0">{interest.label}</p>
              </label>
            </div>
          ))}
        </div>


        <h5 className="text-light text-left mt-4">Entertainment</h5>
        <div className="">
          {EntertainmentData.map((interest, index) => (
            <div key={index} className="form-check form-check-inline pt-2 col-4 ">
              <input
                type="checkbox"
                id={interest.id}
                name="interest"
                value={interest.value}
                className="form-check-input custom-checkbox-checked"
                checked={selectedEntertainmentOptions.includes(interest.value)}
                onChange={(e) => handleCheckboxChange(e, 'entertainment')}
              />
              <label className="form-check-label" htmlFor={interest.id}>
                <p className="pl-2 m-0">{interest.label}</p>
              </label>
            </div>
          ))}
        </div>

        {/* Disclaimer */}


<h5 className="text-light text-left mt-4">Disclaimer</h5>
        <div className="">
          {DisclaimerData.map((interest, index) => (
            <div key={index} className="form-check form-check-inline pt-2 col-4 ">
              <input
                type="checkbox"
                id={interest.id}
                name="interest"
                value={interest.value}
                className="form-check-input custom-checkbox-checked"
                checked={selectedDisclaimerOptions.includes(interest.value)}
                onChange={(e) => handleCheckboxChange(e, 'disclaimer')}
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
            <div key={index} className="form-check form-check-inline pt-2 col-4">
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
        <div>
          {MaximumAttendance.map((interest, index) => (
            <div key={index} className="form-check form-check-inline pt-2 col-4">
              <input
                type="checkbox"
                id={interest.id}
                name="interest"
                value={interest.value}
                className="form-check-input custom-checkbox-checked"
                checked={selectedAttendanceLimit.includes(interest.value)}
                onChange={(e) => handleAttendaceCheckbox(e, 'MaximumAttendance')}
              />
              <label className="form-check-label" htmlFor={interest.id}>
                <p className="pl-2 m-0">{interest.label}</p>
              </label>
            </div>
          ))}
        </div>

        {error && <p className="custom-error-text text-left">{error}</p>}

        {/* Submit Button */}
        <button
          className="become-partner-scroll-btn rounded-custom mt-4"
          style={{ width: "100%", borderRadius: "10px" }}
          onClick={() => {
            checkAllboxChecked()
            handleSubmit()

          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
