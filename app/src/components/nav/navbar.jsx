import React, { Component } from 'react';
const google = window.google;

export default class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      autoComplete: null,
      input: ""
    }
  }

  
  componentDidMount() {
    this.initAutocomplete();
  }

  initAutocomplete() {
    const autoComplete = new google.maps.places.Autocomplete((this.refs.autoComplete), {types: ['(cities)']});
    autoComplete.addListener('place_changed', () => {this.updateCity(autoComplete)});
  }

  updateState(input) {
    return new Promise((resolve, reject) => {
      this.setState({ input }, resolve)
    })
  }

  updateCity(autoComplete) {
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
    this.updateState(locationObj.city)
    .then(() => {
      this.props.search(locationObj);
    }) 
  }

  render () {

    let style = {
      location: {
        cursor: "Pointer"
      }
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarColor01">
          <div className="container">
            <form className="form-inline float-left" onSubmit={(event) => {this.props.weather(event)}}>
              <label className="sr-only" htmlFor="search" >Enter Location</label>
              <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <div className="input-group-addon" onClick={this.props.location} style={style.location}><i className="fa fa-location-arrow"></i></div>
                <input ref="autoComplete" value={this.state.input} onChange={(event) => { this.setState({input: event.target.value})}} className="form-control mr-sm-2" id="search" type="search" placeholder="Enter Location" aria-label="Search" />
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