import React, { Component } from 'react';
import Navbar from './nav/navbar';
import SubNav from './nav/subnav';
import Forecast from './forecast/forecast';
import Map from './map/map';
import Footer from './footer/footer';
import { getLocation } from '../assets/js/location';
import { getWeather } from '../assets/js/weather';
import { subscribeToSocket } from '../assets/js/socket';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 'no date yet',
      geo: {
        location: "",
        city: ""
      },
      darkSky: {
        currently: {}
      }
    }
  }

  componentWillMount() {
    subscribeToSocket((err, timestamp) => this.setState({
      date: timestamp
    }));
  }

  OnChange(term) {
    this.setState({
      geo: {
        city: term
      }
    })
  }

  Location() {
    getLocation((location) => {
      if(location.type === "success") {
        this.setState({
          geo: {
            location: location.response.coords,
            city: location.response.city
          }
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
    let location = this.state.geo.location;
    event.preventDefault();
    getWeather(location)
      .then((response) => {
        this.setState({
          darkSky: response.data
        })
      })
      .catch((error) => {
        console.log("Error: ", error);
      })
  }

  render() {
    return (
      <div className="container-fluid px-0">
        <Navbar weather={this.Weather.bind(this)} search={(term) => { this.OnChange(term); }} geo={this.state.geo} location={this.Location.bind(this)}/>
        <SubNav conditions={this.state.darkSky.currently}/>
        <Forecast/>
        <Map location={this.state.geo.location}/>
        <div className="container">
          <div className="App">
            <p className="d-flex justify-content-center">
              Today's Date: {this.state.date}
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
