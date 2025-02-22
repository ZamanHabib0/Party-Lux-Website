import React from 'react';
import Popup from 'reactjs-popup';

function SuccessfullyDeleted(props) {

  const handleRefreshClick = () => {
    // Reload the page
    window.location.reload();
  };
     
  return (
    <div>
      <Popup open={props.isDialogOpen} closeOnDocumentClick={false} >
       <div className='black-overlay' >
       <div className="confirmation-dialog ">
       <h4 className='text-light'>Deleted </h4>
          <h5 className='text-light'>{props.title}</h5>
               <button type="button" class="m-3 btn btn-success dialogbtn-radius " onClick={props.FirstbtnFunction}><span className='p-3'>{props.FirstbtnText}</span></button>
          <button type="button" class="m-3  dialogbtn-bg dialogbtn-radius text-light"  onClick={handleRefreshClick}><span style={{ padding: "0px 25px 0px 25px" }}>{props.SecondbtnText}</span></button>
        </div>
       </div>
      </Popup>
    </div>
  );
}

export default SuccessfullyDeleted;
