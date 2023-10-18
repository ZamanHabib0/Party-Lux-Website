import React, { useState } from 'react';
import Map from './googlemap';

export default function FifthView(props) {

    const [images, setImages] = useState([]);

    const handleChange = (e) => {
        const selectedFiles = Array.from(e.target.files);

        // Filter out files that are not JPG or PNG
        const validImageFiles = selectedFiles.filter((file) =>
            file.type === 'image/jpeg' || file.type === 'image/png'
        );

        setImages([...images, ...validImageFiles]);
    };


    const handleCancel = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1); // Remove the image at the specified index
        setImages(newImages);
    };



    return (
        <>
            <div className="partnerdata-container mt-5 p-3 ">
                <h4 className="text-light text-left">Business Address</h4>
                <input
                    type="text"
                    className="form-control business-form-control"
                    name="Business Name"
                    id="Business Name"
                    placeholder="Write Address"
                    required="required"
                // value={formData.email}
                // onChange={handleInputChange}
                />

                <h4 className="text-light text-left mt-3">Select Business Location</h4>

                <Map />

            <div className='row justify-content-center '>

            <div style={{width: "45%"}} className='m-1 mt-3 '>
            <h6 className="text-light text-left mt-3 m-2">Longitude</h6>
            <input
                    type="text"
                    className="form-control business-form-control "
                    name="longitude"
                    id="longitude"
                    placeholder="Longitude"
                    required="required"
                // value={formData.email}
                // onChange={handleInputChange}
                />

            </div>
            <div style={{width: "45%"}}  className='m-1 mt-3'>
            <h6 className="text-light text-left mt-3 m-2">latitude</h6>
                <input
                    type="text"
                    className="form-control business-form-control"
                    name="latitude"
                    id="latitude"
                    placeholder="latitude"
                    required="required"
                // value={formData.email}
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






                <button
                    className="become-partner-scroll-btn rounded-custom"
                    style={{ width: "100%", borderRadius: "10px" }}
                    onClick={() => props.handleNext()}

                >
                    Next
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
