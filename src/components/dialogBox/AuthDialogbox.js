import React, { useState } from 'react';
import Popup from 'reactjs-popup';

function LogoutConfirmation(props) {


  return (
    <div>
      <Popup open={props.isDialogOpen} closeOnDocumentClick={false} >
       <div className='black-overlay' >
       <div className="confirmation-dialog ">
          <h4 className='text-light'>Log out of your account?</h4>
               <button type="button" class="m-3 btn btn-danger dialogbtn-radius " onClick={props.handleLogout}><span className='p-3'>Log Out</span></button>
          <button type="button" class="m-3 dialogbtn-bg dialogbtn-radius"  onClick={() => props.setIsDialogOpen(false)}><span className='p-3'>Cancel</span></button>
        </div>
       </div>
      </Popup>
    </div>
  );
}

export default LogoutConfirmation;
