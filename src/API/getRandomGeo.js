import axios from 'axios';
import { urlGeoAPI } from '../variables/variablesScripts';

export const getRandomGeolocation = async () => {
  const geoData = await axios(urlGeoAPI);
  const data = geoData.data.features;
  const result = randomProperty(data).properties;
  return result;
};

const randomProperty = (obj) => {
  const keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};
