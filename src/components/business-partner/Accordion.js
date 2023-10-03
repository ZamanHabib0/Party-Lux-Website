import React, { useState } from "react";


export default function Accordion({ Title }) {
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

    <div className="container" 
    >
    
    <div>
                 <img
                  src= "assets/img/logo-color-1x.png"  
                  width="230"
                  alt="logo"
                  className="img-fluid mt-5 mb-5"
                />
    </div>
    
      <div className="row  justify-content-between">
        <div className="col-md-5">
           <div className="container bg-light mt-5 p-3" > 
          <p>asdasd</p>
            </div>
        </div>


        <div className="col-md-5">
        <div className="col-md-5">
           <div className="container bg-light mt-5 p-3 "   style={{
          background:
            "url('assets/img/become-partner-side-img.png')no-repeat center center / cover",
        }}> 
     <img
                  src= "assets/img/logo-color-1x.png"  
                  width="230"
                  alt="logo"
                  className="img-fluid mt-5 mb-5"
                />
            </div>
        </div>
        </div>
      </div>
    </div>

  </>
  );
}







const imageContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  margin: '10px'
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
};
