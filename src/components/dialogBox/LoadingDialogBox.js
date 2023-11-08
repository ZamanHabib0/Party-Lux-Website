import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';

function Loading(props) {
    const navigate = useNavigate();

  return (
    <div >
      <Popup open={props.isDialogOpen} closeOnDocumentClick={false}>
        <div className=" text-center black-overlay">
          {/* <div className='loading-dialog'>
          <h3 className='text-center text-light'>Loading.....</h3>     
         
          </div> */}
           <div className="loader"></div>
        </div>
       
      </Popup>
    </div>
  );
}

export default Loading;
