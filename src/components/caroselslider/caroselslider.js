import React from 'react';

function CarouselComponent(props) {
  const photos = props.photos || []; // Handle null or undefined props.photos

  return (
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
          ></button>
        ))}
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        {photos.map((photo, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img
              src={photo}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
              height={"300px"}
              style={{ objectFit: "cover", borderRadius: "20px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselComponent;
