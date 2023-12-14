import React from 'react';

export default function FourthView(props) {
  const { businessHours, setBusinessHours } = props;

  const handleDayChange = (day) => {
    setBusinessHours((prevBusinessHours) => ({
      ...prevBusinessHours,
      [day]: { ...prevBusinessHours[day], isOpen: !prevBusinessHours[day].isOpen },
    }));
  };

  const handleTimeChange = (day, type, value) => {
    setBusinessHours((prevBusinessHours) => ({
      ...prevBusinessHours,
      [day]: { ...prevBusinessHours[day], [type]: value },
    }));
  };

  const isDayValid = (day) => {
    return businessHours[day].isOpen && (!businessHours[day].openTime || !businessHours[day].closeTime);
  };

  const canProceed = !Object.keys(businessHours).some((day) => isDayValid(day));

  const transformedData = Object.keys(businessHours).map((day) => {
    const isClose = !businessHours[day].isOpen;
    const startTime = isClose ? '--:--' : businessHours[day].openTime;
    const endTime = isClose ? '--:--' : businessHours[day].closeTime;

    console.log("day" + day)
    

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
        <h4 className="text-light text-left">Business Timmings</h4>
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
            if (!canProceed) {
              props.setAlertErrorMessage("Please select time for open days.");
            } else {
              console.log(transformedData)
              props.setbusinessWeek(transformedData);
              props.handleNext();
            }
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
