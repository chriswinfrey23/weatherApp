import axios from 'axios';
const key = 'AIzaSyD-Pc3VOddQUHcMQGoH9Z-WzMndLH_E42w'

export function getLocation(cb) {

  let options = {
    timeout: 10 * 1000
  }
  let geoSuccess = (position) => {
    let city;
    let location = `${position.coords.latitude}, ${position.coords.longitude}`;
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location}&key=${key}`)
      .then((response) => {
        city = response.data.results[1].formatted_address
        return city;
      })
      .then(() => {
        return cb({type:"success", response : {coords: location, city: city}});
      })
  };
  let geoError = (error) => {
    let errorMessage = `Error occurred. ${error.code}`
    return cb({type: "error", response: errorMessage});
  }

  return navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options)
}