import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EnlargeImage from "../dialogBox/EnlargeImage.js";


function CarouselComponent(props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const photos = props.photos || [];

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {photos.map((photo, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide-to={index}
              className={index === 0 ? "active carousel-btn" : "carousel-btn"}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handlePhotoClick(index)}
            ></button>
          ))}
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner" style={{ border: "1px solid black", borderRadius: "20px" }}>
          {photos.map((photo, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img
                src={photo}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
                height={"300px"}
                style={{ objectFit: "cover", borderRadius: "20px", cursor: "pointer" }}
                onClick={() => handlePhotoClick(index)}
              />
            </div>
          ))}
        </div>
      </div>

      <EnlargeImage
                 title="Are You Sure You Want To Update ?"
                                // handleDialogBox={handleUpdateDialogBox}
                                btnText="Update"
                                isDialogOpen={showModal}
                                selectedPhoto = {photos[selectedPhotoIndex]}
                                setIsDialogOpen={handleClose}
                                handleFunction={
                                    () => {
                                        // localStorage.setItem('businessId', props.businessData?._id);
                                        // navigate("/update-business");
                                    }
                                }
                            />

      {/* Enlarged Image Modal */}
      {/* <Modal show={showModal} onHide={handleClose} centered className="modal-fullpage">
        <Modal.Body>
          <div className="modal-image-container">
            <img
              src={photos[selectedPhotoIndex]}
              className="d-block w-100"
              alt={`Slide ${selectedPhotoIndex + 1}`}
            />
            <Button variant="light" className="close-button" onClick={handleClose}>
              &times;
            </Button>
          </div>
        </Modal.Body>
      </Modal> */}
    </>
  );
}

export default CarouselComponent;
