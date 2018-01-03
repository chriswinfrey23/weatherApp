import React, { Component } from 'react';
import Skycons from 'react-skycons';
import moment from 'moment';
import numeral from 'numeral';

;

class Forecast extends Component {


  getIcon(name) {
    let icon = name.replace(/-/g, "_");
    icon = icon.toUpperCase();
    return (

      <Skycons color="white" icon={icon} />
    )
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <div className="row">
          <h3 className="text-info font-weight-light my-2" style={{marginLeft: "15px"}}>{this.props.geo.city}</h3>
        </div>
        <div className="row">
          <div className="col">
            <div className="card bg-dark text-white">
              <div className="card-header">
                <h3 className="font-weight-normal"><strong>Current Conditions </strong><small className="text-warning hidden-xs-down">{moment().format("hh:mm a")}</small></h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 p-0 d-inline-block">
                    {this.getIcon(this.props.darkSky.currently.icon)}
                  </div>
                  <div className="col-md-8">
                    <div className="temp">
                    {`${numeral(this.props.darkSky.currently.temperature).format('00')}º`}
                    </div>
                    <strong> {this.props.darkSky.currently.summary}</strong>
                    <br /> 
                    {this.props.darkSky.minutely.summary}
                    <br />
                    {`Humidity: ${numeral(this.props.darkSky.currently.humidity).format('0')}%`} | {`Dew Point: ${numeral(this.props.darkSky.currently.dewPoint).format('00')}º`}
                    <br />
                    {`Cloud Cover: ${numeral(this.props.darkSky.currently.cloudCover).format('0')}%`} | {`Pressure: ${numeral(this.props.darkSky.currently.pressure).format('00.00')}`}
                    <br />
                    {`Wind Speed: ${numeral(this.props.darkSky.currently.windSpeed).format('0.0')} mph`} | {`Visibility: ${this.props.darkSky.currently.visibility} mi`}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark text-white">
              <div className="card-header">
                <h3 className="font-weight-normal"><strong>Today's Forecast </strong><small className="text-warning">{moment().format("dddd, MMM Do")}</small></h3>
              </div>
              <div className="card-body">
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <h4 className="text-white font-weight-light my-2" style={{marginLeft: "15px"}}>Next Few Hours</h4>
        </div>
        {/*hourly forecast*/}

        <div className="row mt-5">
          <h4 className="text-white font-weight-light my-2" style={{marginLeft: "15px"}}>
            This Week's Forecast <small className="text-info hidden-xs-down">Info</small>
          </h4>
        </div>
        {/*Weekly Forecasr*/}

      </div>
    )
  }
}

export default Forecast;