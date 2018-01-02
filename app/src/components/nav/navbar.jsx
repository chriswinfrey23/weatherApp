import React, { Component } from 'react';

export default class Navbar extends Component {

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
                <input value={this.props.geo.city} onChange={(event) => {this.props.search(event.target.value)}} className="form-control mr-sm-2" id="search" type="search" placeholder="Enter Location" aria-label="Search" />
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