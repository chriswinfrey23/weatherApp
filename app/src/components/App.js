import React, { Component } from 'react';
import Navbar from './nav/navbar';
import Forecast from './forecast/forecast';
import Loader from './loader/loader';
import Footer from './footer/footer';
import { getLocation } from '../assets/js/location';
import { getWeather } from '../assets/js/weather';
// import { subscribeToSocket } from '../assets/js/socket';

const Main = (props) => {
  return (
    <div className="container">
      <Forecast {...props}/>
    </div>
  )
}

const Loading = (props) => {
  return (
    <div className="container-fluid h-100 mt-4">
      <div className="row justify-content-center align-middle">
        <Loader loading={props.loading}/>
      </div>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "no date",
      loading: true,
      geo: {
        location: "33.444428699999996, -111.955992",
        city: "Tempe, AZ, USA"
      },
      darkSky: {
        currently: {}
      }
    }
  }

  componentDidMount() {
    let location = this.state.geo.location
    // subscribeToSocket((err, timestamp) => {
    //   this.setState({
    //     date: timestamp,
    //   })
    // })
    getWeather(location)
      .then((response) => {
        this.setState({
          darkSky: response.data,
          loading: false
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  setLocation(locationObj) {
    this.setState({
      geo: {
        location: locationObj.coords, 
        city: locationObj.city
      }
    })
  }

  geoLocation() {
    this.setState({loading: true});
    getLocation((location) => {
      if(location.type === "success") {
        this.setState({
          geo: {
            location: location.response.coords,
            city: location.response.city,
          },
          loading: false
        })
      } else  {
        let container = document.createElement("div");
        container.className = "alert alert-warning my-0 text-center";
        container.innerHTML = "Could not use GeoLocation, please search below"
        document.body.insertBefore(container, document.body.firstChild);
        setTimeout(() => {
          let ele = document.getElementsByClassName("alert");
          ele[0].remove();
        }, 3500)
      }
    })
  }


  Weather(event) {
    this.setState({loading: true});
    let location = this.state.geo.location;
    event.preventDefault();
    getWeather(location)
      .then((response) => {
        this.setState({
          darkSky: response.data,
          loading: false
        })
      })
      .catch((error) => {
        console.log("Error: ", error);
      })
  }

  render() {

    return (
      <div>
        <div className="container-fluid px-0">
          <Navbar weather={this.Weather.bind(this)} search={(locationObj) => { this.setLocation(locationObj); }} geo={this.state.geo} date={this.state.date} location={this.geoLocation.bind(this)}/>
        </div>
        {this.state.loading ? (<Loading loading={this.state.loading}/>) : (<Main {...this.state}/>)}
        <Footer/>
      </div>
    );
  }
}



export default App;
