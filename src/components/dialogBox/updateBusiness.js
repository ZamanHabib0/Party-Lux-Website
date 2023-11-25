import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import axios from 'axios';

function UpdateBusiness(props) {
     
  return (
    <div>
      <Popup open={props.isDialogOpen} closeOnDocumentClick={false} >
       <div className='black-overlay' >
       <div className="confirmation-dialog ">
       <h4 className='text-light'>Update Business</h4>
          <h5 className='text-light'>Are You Sure You Want To Update ?</h5>
               <button type="button" className="m-3 btn btn-success dialogbtn-radius " onClick={props.handleFunction}><span className='p-3'>Update</span></button>
          <button type="button" className="m-3  dialogbtn-bg dialogbtn-radius text-white"  onClick={() => props.setIsDialogOpen(false)}><span style={{ padding: "0px 25px 0px 25px" }}>Cancel</span></button>
        </div>
       </div>
      </Popup>
    </div>
  );
}

export default UpdateBusiness;
