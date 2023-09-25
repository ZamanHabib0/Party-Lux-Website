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
  return (
    <>
      <section className={`container accordions ${Title ? "ptb-100" : ""}`}>
        {Title ? (
          <div className="row">
            <div className="col-lg-8 col-md-9">
              <div className="section-heading mb-5">
                <h2>Register Your Business</h2>
                <p className="lead">
                Empower your dreams, register your business today, and pave the path to a brighter future with our app.
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="row">
          <div className="col-lg-6">
            <div id="accordion-1" className="accordion accordion-faq">
            <form className="login-signup-form">
                  <div className="form-group">
                    <label className="pb-1">Business Name</label>
                    <div className="input-group input-group-merge">
                      <div className="input-icon">
                        <span className="ti-briefcase color-primary"></span>
                      </div>
                      <input
                        type="name"
                        className="form-control"
                        placeholder="Enter Business Name"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label className="pb-1">Business Category</label>
                      </div>
                     
                    </div>
                    <div className="input-group input-group-merge">
                      <div className="input-icon">
                        <span className="ti-view-grid color-primary"></span>
                      </div>
                      <input
                        type="name"
                        className="form-control"
                        placeholder="Enter Business Category"
                      />
                    </div>

                    <div className="input-group">
                   
                      {/* <input
                        type="name"
                        className="form-control"
                        placeholder="Enter Business Category" 
                        row = '3'
                      /> */}

<textarea className="form-control"  rows="8"></textarea>

                    </div>
                  </div>

   

                 
                </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div id="accordion-2" className="accordion accordion-faq">
            <form className="login-signup-form">
                  <div className="form-group">
                    <label className="pb-1">Upload Business Images</label>
                    <div className="input-group input-group-merge">
                
                    <div className="mb-2">
               <div className="image-preview-container" style={imageContainerStyle}>
              {images.map((image, index) => (
            <div className="image-preview-box" style={imageBoxStyle} key={index}>
            <img src={URL.createObjectURL(image)} alt={`Image ${index}`} style={imageStyle} />
          </div>
        ))}
      </div>
      <input
        type="file"
        id="file-input"
        onChange={handleChange}
        name="ImageStyle"
        multiple
        accept=".jpg, .jpeg, .png" // Specify the accepted file types
      />
    </div>
                  </div>
                  </div>

                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label className="pb-1">Password</label>
                      </div>
                     
                    </div>
                    <div className="input-group input-group-merge">
                      <div className="input-icon">
                        <span className="ti-lock color-primary"></span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

   

                 
                </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



const imageContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  margin : '10px'
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
