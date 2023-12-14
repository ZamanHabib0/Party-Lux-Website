import React from 'react';
import Popup from 'reactjs-popup';
import  useLockBodyScroll  from "./disableScroll";

function LogoutConfirmation(props) {
  useLockBodyScroll();
  return (
    <div>
      <Popup open={props.isDialogOpen} closeOnDocumentClick={false} >
       <div className='black-overlay' >
       <div className="confirmation-dialog ">
       <h4 className='text-light'>Logout</h4>
          <h5 className='text-light'>Logout of your account?</h5>
               <button type="button" class="m-3 btn btn-danger dialogbtn-radius " onClick={props.handleLogout}><span className='p-3'>Log Out</span></button>
          <button type="button" class="m-2  dialogbtn-bg dialogbtn-radius text-light"  onClick={() => props.setIsDialogOpen(false)}><span style={{ padding: "0px 25px 0px 25px" }}>Cancel</span></button>
        </div>
       </div>
      </Popup>
    </div>
  );
}

export default LogoutConfirmation;
