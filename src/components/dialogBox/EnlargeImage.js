import React from 'react';
import Popup from 'reactjs-popup';



function EnlargeImage(props) {
     
  return (
    <div>
      <Popup open={props.isDialogOpen} closeOnDocumentClick={false} >
       <div className='black-overlay' >
      
       <div className='image-enlarge-dialog'>
  <h5
    className='pl-2 text-white business-detail-cross'
    style={{
      fontSize: '16px',
      cursor: 'pointer',
      position: 'fixed',
      zIndex: 9999,
      top: '13%',  // Adjust the top position as needed
      right: '11%',  // Adjust the right position as needed
    }}
    onClick={() => props.setIsDialogOpen(false)}
  >
    <span className='ti-close'></span>
  </h5>

  <div
  >
    <img
      src={props.selectedPhoto}
      style={{objectFit: "contain" , height : "80vh" , width : "100%"}}
      className='d-block '
      alt=''
    />
  </div>
</div></div>

      </Popup>
    </div>
  );
}

export default EnlargeImage;
