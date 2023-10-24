import React, { useState  } from 'react';
import Map from './googlemap';
import axios from "axios";

export default function FifthView(props) {

    const [images, setImages] = useState([]);
    const [location, setlocation] = useState({});
    const [error, setError] = useState(null);
    const [imageURLs, setImageURLs] = useState([]);
    const [place, setPlace] = useState("");
    const [uploading, setUploading] = useState(false);
  

    const handleChange = async (e) => {
        const selectedFiles = Array.from(e.target.files);

        const validImageFiles = selectedFiles.filter((file) =>
            file.type === 'image/jpeg' || file.type === 'image/png'
        );

        setImages([...images, ...validImageFiles]);
        // const uploadedURLs = await uploadImages(validImageFiles);

        // setImages([...images, ...validImageFiles]);
    };


    const handleCancel = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1); // Remove the image at the specified index
        setImages(newImages);
    };
      
    const uploadImages = async (files) => {
        setUploading(true);
        try {

            const authToken = localStorage.getItem('authToken');


          const formData = new FormData();
          files.forEach((file, index) => {
            formData.append(`uploadedImages`, file);
          });
      
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${authToken}`,
            },
          };
      
          const response = await axios.post(
            "https://backend-partylux-staging.up.railway.app/v1/mobile/users/upload-multiple-photo",
            formData,
            config
          );
      
          if (response.data.status === 200) {
            const data = response.data;
            const newImageURLs = Array.isArray(data.data) ? data.data : [];
      
            // Append the new image URLs to the existing imageURLs state
            setImageURLs(newImageURLs);
            console.log(imageURLs) 


            const mineCustomobject = {
                place :  place,
                location: location,
                photos: newImageURLs,
                businessProfile : ""
              }

              props.setbusinessAddress(mineCustomobject)






              setUploading(false);
            props.handleNext();
        } else {
            setUploading(false);
            // console.error('Image upload failed');
            setError(response.data.data.msg);
          }
        } catch (error) {
            setUploading(false);
        //   console.error('Image upload failed', error);
          setError('Image upload failed', error);
        }
      };
      


    return (
        <>
            <div className="partnerdata-container mt-5 p-3 ">
                <h4 className="text-light text-left">Business Address</h4>
                <input
                    type="text"
                    className="form-control business-form-control"
                    name="place"
                    id="place"
                    placeholder="Write Address"
                    required="required"
                value={place}
               
                onChange={(e) => setPlace(e.target.value)}
                />

                <h4 className="text-light text-left mt-3">Select Business Location</h4>

              <div >
              <Map location = {location} setlocation = {setlocation} />
              </div>

                <div className='row justify-content-center '>

                    <div style={{ width: "45%" }} className='m-1 mt-3 '>
                        <h6 className="text-light text-left mt-3 m-2">Longitude</h6>
                        <input
                            type="text"
                            className="form-control business-form-control "
                            name="longitude"
                            id="longitude"
                            placeholder="Longitude"
                            required="required"
                            disabled={true}
                        value={location.coordinates ? location.coordinates[0] : ''}
                        // onChange={handleInputChange}
                        />

                    </div>
                    <div style={{ width: "45%" }} className='m-1 mt-3'>
                        <h6 className="text-light text-left mt-3 m-2">latitude</h6>
                        <input
                            type="text"
                            className="form-control business-form-control "
                            name="latitude"
                            id="latitude"
                            placeholder="latitude"
                            required="required"
                            disabled={true}
                            value={location.coordinates ? location.coordinates[1] : ''}
                        // onChange={handleInputChange}
                        /></div>
                </div>

                <h4 className="text-light text-left mt-3">Business Images</h4>



                <div className="mb-2 text-left">
                    <label class="custom-file-upload">
                        <a style={{ color: "#da13ec", fontWeight: "bold" }}> Click here</a> Upload your Business Images ,
                        Supported Formats: JPG, PNG,;
                        <br />  Max File Size:5MB.
                        <input
                            type="file"
                            id="file-input"
                            onChange={handleChange}
                            name="image-selection-field"
                            multiple
                            accept=".jpg, .jpeg, .png"
                        />
                    </label>
                    <div className="image-preview-container mt-3" style={imageContainerStyle}>
                        {images.map((image, index) => (
                            <div className="image-preview-box" style={imageBoxStyle} key={index}>
                                <img src={URL.createObjectURL(image)} alt={`Image ${index}`} style={imageStyle} />
                                <button type="button" onClick={() => handleCancel(index)} className="cancel-button"  >

                                    <img
                                        src="assets/img/cancel.png"
                                        width="20"
                                        alt="cancel"
                                        className="img-fluid"
                                    />

                                </button>
                            </div>
                        ))}
                    </div>

                </div>
                {error && <p className="custom-error-text text-left">{error}</p>} {/* Display error message if error exists */}







                  <button
          className="become-partner-scroll-btn rounded-custom"
          style={{ width: '100%', borderRadius: '10px' }}
          onClick={async () => {
            if (!uploading) {
              await uploadImages(images);
            }
          }}
          disabled={uploading} // Disable the button when uploading is in progress
        >
          {uploading ? 'Uploading...' : 'Next'}
        </button>
            </div>
        </>
    );
}

const labelStyle = {
    marginBottom: '1rem',
    fontFamily: 'Arial, sans-serif',
};

const imageContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
};

const imageBoxStyle = {
    maxWidth: '100px',
    maxHeight: '100px',
    overflow: 'hidden',
};

const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: "10px"
};



