import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getRandomGeolocation } from '../../API/getRandomGeo';

const MapProfile = (props) => {
  const { children, className, latitude, longitude, ...restProps } = props;

  const url = () => {
    return `https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed&z=13`;
  };
  return (
    <div className={`geo_map ${className ? className : ''}`}>
      <iframe width="100%" height="450px" src={url()}></iframe>
    </div>
  );
};

export default MapProfile;
