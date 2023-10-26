import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import axios from 'axios';


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

  const {
    center,
    pointerLocation,
    zoom,
    mapKey,
    completeaddress,
    setCenter,
    setPointerLocation,
    setZoom,
    setMapKey,
    setCompleteAddress,
  } = props;


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
      navigator.geolocation.getCurrentPosition(async (position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const coordinates = [userLocation.lng, userLocation.lat];

        setCenter(userLocation);
        setPointerLocation(userLocation);
        setMapKey(mapKey + 1);

 

      });
    }
  };

  const handleMapChange = async (map) => {
    // Update the pointer location when the map center changes

    console.log(props.location)
    setPointerLocation(map.center);
    props.setlocation({
      type: "Point",
      coordinates: [
        pointerLocation.lng,
        pointerLocation.lat
      ],
      radius: "50",
    });

    try {
      const apiKey = "AIzaSyADipQDfFfvFUnv5sdZ4_0DAWFdvyiSf4Y";
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pointerLocation.lng},${pointerLocation.lat}&key=${apiKey}`
      );

      if (response.data.status === "OK") {
        const address = response.data.results[0].formatted_address;
   
        setCompleteAddress(address)
        console.log(address);
      } else {
        console.error("Geocoding request failed");
      }
    } catch (error) {
      console.error("Error fetching location data", error);
    }


  };

  return (
   
      <div style={{ height: '40vh', width: '100%', borderRadius: '20px', overflow: 'hidden', zIndex: 0 }}>
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
        className="locationBtn"
        onClick={handleLocationButtonClick}
      >
        <img
          src="assets/img/loactionicon.png"
          alt="img"
          width={"28"}
          className=""
        />
      </button>


      </div>
 
  );
};

export default SimpleMap;
