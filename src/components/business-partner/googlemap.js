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
      style={{ position: 'absolute', transform: 'translate(-50%, -50%)', left: '50%', top: '50%', }}
    />
  </div>
);

const SimpleMap = () => {
  const [center, setCenter] = useState({
    lat: 28.42835602,
    lng: 70.32902627
  });
  const [pointerLocation, setPointerLocation] = useState({
    lat: 28.42835602,
    lng: 70.32902627
  });
  const [zoom, setZoom] = useState(14);
  const [mapKey, setMapKey] = useState(1);

  const handleApiLoaded = (map, maps) => {
    const mapStyle = [
      {
        featureType: "all",
        elementType: "all",
        stylers: [
          { saturation: -50 },
          { lightness: -4 },
        ],
      },
    ];

    map.setOptions({
      styles: mapStyle,
    });
  };

  const handleLocationButtonClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCenter(userLocation);
        setPointerLocation(userLocation);
        setMapKey(mapKey + 1);
      });
    }
  };

  const handleMapChange = (map) => {
    // Update the pointer location when the map center changes
    setPointerLocation(map.center);
  };

  return (
    <div style={{ height: '40vh', width: '100%', borderRadius: '20px', overflow: 'hidden' }}>
      <GoogleMapReact
        key={mapKey}
        bootstrapURLKeys={{ key: "AIzaSyADipQDfFfvFUnv5sdZ4_0DAWFdvyiSf4Y" }}
        center={center}
        zoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        onChange={handleMapChange}
      >
        <AnyReactComponent lat={pointerLocation.lat} lng={pointerLocation.lng} />
      </GoogleMapReact>

      <button
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '10px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={handleLocationButtonClick}
      >
        Get My Location
      </button>
    </div>
  );
};

export default SimpleMap;
