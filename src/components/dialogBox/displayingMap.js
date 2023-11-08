import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ lat, lng }) => (
  <div
    style={{
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      left: '50%',
      top: '50%',
    }}
  >
    <img
      src="assets/img/pointer.png"
      alt="Default Pointer"
      width={36}
      height={40}
      style={{ position: 'absolute', transform: 'translate(-50%, -50%)', left: '50%', top: '50%', zIndex: 10 }}
    />
  </div>
);

const SimpleMap = (props) => {
  const { latitude, longitude } = props; // Destructure latitude and longitude from props

  // Set the initial center and zoom based on props
  const center = {
    lat: latitude,
    lng: longitude,
  };
  const zoom = 13;

  // Add your other functions here if needed, such as handleApiLoaded and handleMapChange

  return (
    <div style={{ height: '40vh', width: '100%', borderRadius: '20px', overflow: 'hidden', zIndex: 100 }}>
      <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyADipQDfFfvFUnv5sdZ4_0DAWFdvyiSf4Y" }}
        center={center}
        zoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        // Add your other event handlers here
      >
        <AnyReactComponent lat={center.lat} lng={center.lng} />
      </GoogleMapReact>

      {/* Your location button here if needed */}
    </div>
  );
};

export default SimpleMap;
