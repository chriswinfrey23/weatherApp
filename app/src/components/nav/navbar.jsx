import React, { Component } from 'react';
const google = window.google;

export default class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      autoComplete: null
    }
  }

  
  componentDidMount() {
    this.initAutocomplete();
  }

  initAutocomplete() {
    const autoComplete = new google.maps.places.Autocomplete((this.refs.autoComplete), {types: ['(cities)']});
    autoComplete.addListener('place_changed', () => {this.fillInAddress(autoComplete)});
  }

  fillInAddress(autoComplete) {
    let locationObj = {}
    this.setState({ autoComplete }, () => {
      let city = this.state.autoComplete.getPlace().formatted_address;
      let coords = this.state.autoComplete.getPlace().geometry.location.toUrlValue(6);
      locationObj = {
        city: city,
        coords: coords
      }
      return locationObj;
    })
    console.log(locationObj);
  }

  render () {

    let style = {
      location: {
        cursor: "Pointer"
      }
    }
    // console.log(this.state.autoComplete);
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarColor01">
          <div className="container">
            <form className="form-inline float-left" onSubmit={(event) => {this.props.weather(event)}}>
              <label className="sr-only" htmlFor="search" >Enter Location</label>
              <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <div className="input-group-addon" onClick={this.props.location} style={style.location}><i className="fa fa-location-arrow"></i></div>
                <input ref="autoComplete" value={this.props.geo.city} onChange={(event) => {this.props.search(event.target.value)}} className="form-control mr-sm-2" id="search" type="search" placeholder="Enter Location" aria-label="Search" />
              </div>
                <button style={style.location} disabled={!this.props.geo.city} className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>
            <ul className="navbar navbar-nav float-right text-white">
              <li>{this.props.date}</li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}