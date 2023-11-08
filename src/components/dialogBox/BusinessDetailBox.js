import React, { useState , useEffect} from 'react';
import Popup from 'reactjs-popup';
import CaroselSlider from "../caroselslider/caroselslider.js"
import Map from "./displayingMap.js";
import DeleteBox from "./DeleteBusiness.js";
import UpdateBox from "./DeleteBusiness.js";
import axios from 'axios';
import SuccessfullyDeleted from './SuccessFullyDeleted.js';
import { useNavigate } from 'react-router-dom';

function BusinessDetailBox(props) {
    const [isUpdateDialogOpen, setUpdateDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [isSuccessfullyDeleted, setSuccessfullyDeleted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isBusinessActive, setIsBusinessActive] = useState(true);
    const navigate = useNavigate();

    const [businessId, setBusinessId] = useState("")

    
  useEffect(() => {
    // Initialize the state of the toggle based on the business state from props
    const businessOpen = (props.businessData?.businessState == "close") ? false : true
    setIsBusinessActive(businessOpen);

  }, [props.isBusinessActive]);

    const businessWeekData = [
        { day: 'Monday', startTime: '09:15 PM', endTime: '09:15 PM' },
        { day: 'Tuesday', startTime: '09:15 PM', endTime: '09:15 PM' },
        { day: 'Wednesday', startTime: '09:15 PM', endTime: '09:15 PM' },
        { day: 'Thursday', startTime: '09:15 PM', endTime: '09:15 PM' },
        { day: 'Friday', startTime: '09:15 PM', endTime: '09:15 PM' },
        { day: 'Saturday', startTime: '09:15 PM', endTime: '09:15 PM' },
        { day: 'Sunday', startTime: '09:15 PM', endTime: '09:15 PM' },
    ];

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleDeteleDialogBox = () => {
        setDeleteDialogOpen(true);
    };
    const handleUpdateDialogBox = () => {
        setUpdateDialogOpen(true);
    };

    const deleteBusiness = () => {
        setLoading(true);
        // Get the authentication token from local storage
        const authToken = localStorage.getItem('authToken');
        // Check if the authToken is available
        if (!authToken) {
            console.error('Authentication token is missing.');
            return;
        }

        // Define the request configuration



        // Define the request body with the businessId
        const requestData = {
            businessId: props.businessData?._id,
        };

        // Make a DELETE request to delete the business
        axios
            .delete('https://backend-partylux-staging.up.railway.app/v1/mobile/business/delete-business', {
                headers: {
                    Authorization: `Bearer ${authToken}`
                },
                data: requestData // Make sure requestData is defined correctly
            })
            .then((response) => {
                // Handle success
                setLoading(false);

                setSuccessfullyDeleted(true)
                setDeleteDialogOpen(false)
        
            })
            .catch((error) => {
                // Handle errors
                setLoading(false);
                console.error('Error deleting business:', error);
            });
    };

    const handleToggle = async () => {
        // Get the token from local storage
        const authToken = localStorage.getItem('authToken');

        const ActualBusinessState = (isBusinessActive) ? "close" : "open"
    
        // Prepare the request data
        const requestData = {
            businessId: props.businessData?._id,
          businessState: ActualBusinessState,
        };
    
        // Make an API request to update the business state
        try {
          const response = await fetch('https://backend-partylux-staging.up.railway.app/v1/mobile/business/updateBusinessState', {
            method: 'PATCH',
            headers: {
              'Authorization': `Bearer ${authToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
          });
    
          if (response.status === 200) {
            // If the update is successful, update the state variable
            setIsBusinessActive(!isBusinessActive);
          } else {
            // Handle errors or show a message to the user
            console.error('Failed to update business state');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return (
        <div>
            <Popup open={props.isDialogOpen} closeOnDocumentClick={false} >
                <div className='black-overlay' >
                    <div className="business-detail-dialog ">
                        <div className='container '>
                            <h3 className='text-dark mb-5'></h3>
                            <div className=' d-flex pb-4 justify-content-between'>
                                <h4 className="card-text mb-auto" style={{ fontSize: "30px" }}>Business Detail</h4>
                                <h5 className='pl-2 text-white business-detail-cross' style={{ fontSize: "16px", cursor: "pointer" }} onClick={() => props.setIsDialogOpen(false)}> <span className='ti-close'></span> </h5>

                            </div>

                            <div className='row'>
                                <div className='col-md-5'>
                                    <CaroselSlider photos={props.businessData ? props.businessData.photos : []} />
                                    <div className=' d-flex pt-4'>
                                        <h4 className="card-text mb-auto" >Place: </h4>
                                        <h6 className='pl-2'> {props.businessData ? props.businessData.place : "No price is available"}</h6>

                                    </div>

                                    <div className='business-view-map mt-4 '>

                                        <Map latitude={props.businessData ? props.businessData.location.coordinates[0] : ""} longitude={props.businessData ? props.businessData.location.coordinates[1] : ""} />

                                    </div>

                                    <div className='d-flex justify-content-between p-4'>
                                        <div className=' d-flex  '>
                                            <h5 className="card-text mb-auto" >latitude: </h5>
                                            <h6 className='pl-2 ' >{props.businessData ? props.businessData.location.coordinates[0] : ""}</h6>

                                        </div>

                                        <div className=' d-flex  '>
                                            <h5 className="card-text mb-auto" >Logitude: </h5>
                                            <h6 className='pl-2 ' >{props.businessData ? props.businessData.location.coordinates[1] : ""}</h6>

                                        </div>
                                    </div>

                                    <h4 className="card-text mb-auto pt-5" style={{ fontSize: "25px" }}>Business Description: </h4>
                                    <p className='mt-3'>
                                        {props.businessData ? props.businessData.note : "No description is available"}$
                                    </p>



                                </div>

                                <div className='col-md-1'>  </div>
                                <div className='col-md-6'>

                                    <div className=' d-flex pb-4'>
                                        <h4 className="card-text mb-auto" style={{ fontSize: "30px" }}>Title: </h4>
                                        <h5 className='pl-2' style={{ fontSize: "30px" }}> {props.businessData ? capitalizeFirstLetter(props.businessData.bussinessName) : "No business name available"} </h5>

                                    </div>

                                    <div className='d-flex justify-content-between'>
                                        <div className=' d-flex pb-4'>
                                            <h4 className="card-text mb-auto" style={{ fontSize: "20px" }}>Category: </h4>
                                            <h5 className='pl-2' style={{ fontSize: "20px" }}> {props.businessData ? capitalizeFirstLetter(props.businessData.bussinessCategory) : "No business category available"} </h5>

                                        </div>
                                        <div className='row'>
                                            <h5 style={{margin : "10px"}}>Live</h5>
                                            <input
        type="checkbox"
        id="switch"
        className="checkbox"
        checked={isBusinessActive}
        onChange={handleToggle}
      />
      <label htmlFor="switch" className="toggle"></label>
                                        </div>
                                    </div>

                                    <div className=" ">
                                        <h4 className="card-text mb-auto pb-4" style={{ fontSize: "20px" }}>Business Weeks </h4>
                                        <button className="btn btn-secondary  d-flex justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '100%' }}>
                                            <p className='m-0 p-2'>Monday</p> <span className='ti-angle-down p-2'></span>
                                        </button>
                                        <ul className="dropdown-menu custom-dropdown-menu mt-3  " style={{ width: '95%' }}>
                                            {props.businessData ? (
                                                props.businessData.businessWeek.map((dayData, index) => (
                                                    <li key={index}>
                                                        <div className='d-flex justify-content-between pl-3 pr-3 '>
                                                            <h5 className="card-text mb-auto">{capitalizeFirstLetter(dayData.bussinessDay)}</h5>
                                                            <h6 className='pl-2'>{`${dayData.startTime} - ${dayData.endTime}`}</h6>
                                                        </div>
                                                    </li>
                                                ))
                                            ) : (
                                                businessWeekData.map((dayData, index) => (
                                                    <li key={index}>
                                                        <div className='d-flex justify-content-between pl-3 pr-3 '>
                                                            <h5 className="card-text mb-auto">{dayData.day}</h5>
                                                            <h6 className='pl-2'>{`${dayData.startTime} - ${dayData.endTime}`}</h6>
                                                        </div>
                                                    </li>
                                                ))
                                            )}

                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="card-text mb-auto pt-5 " style={{ fontSize: "25px" }}>Business Esentials: </h4>
                                        <h5 className="card-text mb-auto pt-3" style={{ fontSize: "20px" }}>Music </h5>
                                        {(props.businessData ? props.businessData.music : []).map((music, index) => (
                                            <div key={index} className='m-3 business-essential-element'>
                                                <p className='m-0'>{music}</p>
                                            </div>
                                        ))}

                                        <h5 className="card-text mb-auto pt-3" style={{ fontSize: "20px" }}>Entertainment </h5>
                                        {(props.businessData ? props.businessData.entertainment : []).map((music, index) => (
                                            <div key={index} className='m-3 business-essential-element'>
                                                <p className='m-0'>{music}</p>
                                            </div>
                                        ))}

                                        <h5 className="card-text mb-auto pt-3" style={{ fontSize: "20px" }}>Disclaimer </h5>
                                        {(props.businessData ? props.businessData.disclaimer : []).map((music, index) => (
                                            <div key={index} className='m-3 business-essential-element'>
                                                <p className='m-0'>{music}</p>
                                            </div>
                                        ))}

                                        <h5 className="card-text mb-auto pt-3" style={{ fontSize: "20px" }}>Age Limit </h5>

                                        <div className='m-3 business-essential-element'>
                                            <p className='m-0'>{props.businessData ? props.businessData.ageLimit : "No ageLimit is available"}</p>
                                        </div>



                                        <h5 className="card-text mb-auto pt-3" style={{ fontSize: "20px" }}>MaxParticipants </h5>

                                        <div className='m-3 business-essential-element'>
                                            <p className='m-0'>{props.businessData ? props.businessData.maxParticipants : "maxParticipants is unlimited"}</p>
                                        </div>

                                        <h5 className="card-text mb-auto pt-3" style={{ fontSize: "20px" }}>Admission Fee </h5>

                                        <div className='m-3 business-essential-element'>
                                            <p className='m-0'>Male : {props.businessData ? props.businessData.admissionFee.male.amount : "No price is available"}$</p>
                                        </div>

                                        <div className='m-3 business-essential-element'>
                                            <p className='m-0'>Female : {props.businessData ? props.businessData.admissionFee.female.amount : "No price is available"}$</p>
                                        </div>

                                    </div>

                                    <div className='d-flex justify-content-end '>

                                        <button type="button" className="m-3 pt-2 pb-2 btn-success   dialogbtn-radius" onClick={() => handleUpdateDialogBox()}><span className='p-3' >Update</span></button>
                                        <button type="button" className="m-3 p-2 btn btn-danger dialogbtn-radius " onClick={() => {
                                            setBusinessId(props.businessData?._id)
                                            handleDeteleDialogBox()
                                        }} ><span className='p-3'> Delete</span></button>

                                    </div>
                                </div>

                            </div>

                            <DeleteBox
                                title="Are You Sure You Want To Delete"
                                handleFunction={deleteBusiness}
                                handleDialogBox={handleUpdateDialogBox}
                                btnText={loading ? 'Please Wait...' : 'Delete'}
                                isDialogOpen={isDeleteDialogOpen}
                                setIsDialogOpen={setDeleteDialogOpen}
                            />

                            <UpdateBox
                                title="Are You Sure You Want To Update"
                                handleDialogBox={handleUpdateDialogBox}
                                btnText="Update"
                                isDialogOpen={isUpdateDialogOpen}
                                setIsDialogOpen={setUpdateDialogOpen}
                                handleFunction={
                                    () => {
                                        localStorage.setItem('businessId', props.businessData?._id);
                                        navigate("/update-business");
                                    }
                                }
                            />

                            <SuccessfullyDeleted
                                title="Business Deleted Successfully"
                                FirstbtnText="Home Page"
                                SecondbtnText="My business"
                                isDialogOpen={isSuccessfullyDeleted}
                                setIsDialogOpen={setSuccessfullyDeleted}
                                FirstbtnFunction={
                                    () => {
                                        setSuccessfullyDeleted(false)
                                        navigate("/");
                                    }
                                }
                                SecondbtnFunction={
                                    () => {
                                        setSuccessfullyDeleted(false)
                                        navigate("/my-business");
                                    }
                                }
                            />


                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    );
}

export default BusinessDetailBox;
