import axios from 'axios';

export const getWeather = (location) => {
  console.log(location);
  return axios.post(`http://localhost:8080/weather`, {location: location});
}