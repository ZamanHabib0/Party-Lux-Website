import React from 'react';

function StepsRow({ currentIndex, onButtonClick }) {
  const buttonCount = 8; // Number of buttons
  const buttons = [];

  for (let index = 0; index < buttonCount; index++) {
    const isActive = index <= currentIndex;
    const isFirst = index === 0;
    const isLast = index === buttonCount - 1;

    const buttonClasses = `steps-button m-1 ${isActive ? 'active-background-color' : ''} ${
      isFirst ? 'steps-first-button' : ''
    } ${isLast ? 'steps-last-button' : ''}`;

    const isDisabled = index > currentIndex; // Disable buttons that are ahead of the current step

    buttons.push(
      <button
        key={index}
        className={buttonClasses}
        // onClick={() => onButtonClick(index)}
        disabled={isDisabled}
      ></button>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between text-light">
        <span className="text-left"></span>
        <span className="text-right">{currentIndex + 1} / 8</span>
      </div>
      
      <div className="steps-button-container">{buttons}</div>
    </>
  );
}

export default StepsRow;
