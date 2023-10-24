import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';

function LoginConfirmation(props) {
    const navigate = useNavigate();

  return (
    <div >
      <Popup open={props.isDialogOpen} closeOnDocumentClick={false}>
        <div className=" text-center black-overlay">
          <div className='confirmation-dialog'>
          <h3 className='text-center text-light'>{props.title} </h3>
          <img
                  src="assets/img/check-mark.png"
                  alt="img"
                  className= "text-center pb-4 pt-4"
                  width={"100px"}
                />
     
          <button type="button" class="m-3  become-partner-scroll-btn text-light" onClick={() => {
            props.setIsDialogOpen(false);
            navigate("/")
          }}><span className='p-3'>View Home Page</span></button>
          <button type="button" class="m-3  become-partner-btn text-light nav-item " onClick={() => {
            props.setIsDialogOpen(false);
            navigate("/become-partner")
          }}><span className='p-3'>Become A Partner</span> </button>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default LoginConfirmation;
