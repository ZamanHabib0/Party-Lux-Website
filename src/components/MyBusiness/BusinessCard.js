import React, { useState } from 'react';
import BusinessDetail from "../dialogBox/BusinessDetailBox.js";
import axios from 'axios';
import Loading from '../dialogBox/LoadingDialogBox.js';

function BusinessListingTile(props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [businessData, setBusinessData] = useState(null);

  const [isClickable, setIsClickable] = useState(true);

  const handleClick = async () => {
    if (isClickable) {
      props.setIsLoading(true);
      setIsClickable(false);

      try {
        const response = await fetchBusinessDetails();
        setBusinessData(response.data.data);
        handleDialogBox();
      } catch (error) {
        console.error('Error fetching business details:', error);
      } finally {
        props.setIsLoading(false);
        setIsClickable(true);
      }
    }
  };

  const handleDialogBox = () => {
    document.body.style.overflow = 'hidden';
    setIsDialogOpen(true);
  };

  const fetchBusinessDetails = async () => {
    const authToken = localStorage.getItem('authToken');
    const businessID = props.businessId;
    const requestData = {
      businessId: businessID
    };

    try {
      const response = await axios.post('https://backend-partylux-production.up.railway.app/v1/mobile/business/business-detail', requestData, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  return (
    <>
      <BusinessDetail SetBusinessStateMessage = {props.SetBusinessStateMessage} setAlertErrorMessage = {props.setAlertErrorMessage} isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} businessData={businessData} />
      <Loading
        title = "login Successfully" 
          handleDialogBox={handleDialogBox}
          isDialogOpen={props.isLoading}
          setIsDialogOpen={setIsDialogOpen}
        />
      <div className="row g-0 border business-listing-tile overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{ cursor: isClickable ? "pointer" : "not-allowed" }} onClick={handleClick}> 
            <div className="rounded">
              <div style={{ width: "180px", height: "180px" }}>
                <img
                  src={props.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'}
                  alt="businessImg"
                  style={{ objectFit: "cover",borderRadius: "30px" }}
                  className="p-3"
                  width="180"
                  height="180"
                />
              </div>
            </div>
            <div className="col listing-tile-data d-flex flex-column position-static">
              <div className=' d-flex justify-content-between '>
                <h4 className="mb-0 d-flex justify-content-between ">{props.name}</h4>
                <h6>  { capitalizeFirstLetter( props.bussinessCategory)}</h6>
              </div>
              <div className="mb-1 text-muted mt-2 mb-4"><strong>Timming:</strong> {props.startTime} - {props.endTime}  </div>
              <div className=' d-flex justify-content-between mt-3'>
              <p className="card-text mb-auto" style={{ width: "80%" }}>
  {props.place.length <= 45 ? (
    props.place
  ) : (
    <>
      {props.place.slice(0, 45)}
      {"..."}
    </>
  )}
</p>
                <h5 className=''>{props.price === 'Free' ? 'Free' : `${props.price} $`}</h5>
              </div>
            </div>
      </div>
    </>
  );
}



export default BusinessListingTile;
