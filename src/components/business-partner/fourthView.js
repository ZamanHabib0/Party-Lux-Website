import React, { useState } from 'react';

export default function FourthView(props) {
  const [businessHours, setBusinessHours] = useState({
    monday: { isOpen: false, openTime: '', closeTime: '' },
    tuesday: { isOpen: false, openTime: '', closeTime: '' },
    wednesday: { isOpen: false, openTime: '', closeTime: '' },
    thursday: { isOpen: false, openTime: '', closeTime: '' },
    friday: { isOpen: false, openTime: '', closeTime: '' },
    saturday: { isOpen: false, openTime: '', closeTime: '' },
    sunday: { isOpen: false, openTime: '', closeTime: '' },
  });

  const handleDayChange = (day) => {
    setBusinessHours({
      ...businessHours,
      [day]: { ...businessHours[day], isOpen: !businessHours[day].isOpen },
    });
  };

  const handleTimeChange = (day, type, value) => {
    setBusinessHours({
      ...businessHours,
      [day]: { ...businessHours[day], [type]: value },
    });
  };

  const isDayValid = (day) => {
    return businessHours[day].isOpen && (!businessHours[day].openTime || !businessHours[day].closeTime);
  };

  const canProceed = !Object.keys(businessHours).some((day) => isDayValid(day));

  const transformedData = Object.keys(businessHours).map((day) => {
    const isClose = !businessHours[day].isOpen;
    const startTime = isClose ? '--:--' : businessHours[day].openTime;
    const endTime = isClose ? '--:--' : businessHours[day].closeTime;
  
    return {
      isClose,
      bussinessDay: day,
      startTime,
      endTime,
    };
  });

 

  return (
    <>
      <div className="partnerdata-container mt-5 p-3">
        <h4 className="text-light text-left">Business Description</h4>
        <div className="container text-left">
          {Object.keys(businessHours).map((day) => (
            <div className="row mb-3" key={day}>
              <div className="col-md-3">
                <div style={{ padding: "14px 0px 0px 0px" }}>
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className={`form-check-input custom-checkbox-checked ${businessHours[day].isOpen ? '' : ''}`}
                      name={day}
                      checked={businessHours[day].isOpen}
                      onChange={() => handleDayChange(day)}
                    />
                    <p className="d-inline ml-2">{day.charAt(0).toUpperCase() + day.slice(1)}</p>
                  </label>
                </div>
              </div>
              <div className="col-md-9 text-right">
                <input
                  type="time"
                  className="time-input-field"
                  value={businessHours[day].openTime}
                  onChange={(e) => handleTimeChange(day, 'openTime', e.target.value)}
                  required={businessHours[day].isOpen}
                />
                <label className="m-3">To</label>
                <input
                  type="time"
                  className="time-input-field"
                  value={businessHours[day].closeTime}
                  onChange={(e) => handleTimeChange(day, 'closeTime', e.target.value)}
                  required={businessHours[day].isOpen}
                />
              </div>
            </div>
          ))}
        </div>
        <button
          className="become-partner-scroll-btn rounded-custom"
          style={{ width: "100%", borderRadius: "10px" }}
          onClick={() => {
            props.setbusinessWeek(transformedData)
            // console.log(props.businessWeek[0])
            props.handleNext()
          }}
          disabled={!canProceed}
        >
          Next
        </button>
      </div>
    </>
  );
}
