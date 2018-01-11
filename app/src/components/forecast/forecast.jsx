import React, { Component } from 'react';
import Skycons from 'react-skycons';
import moment from 'moment-timezone';
import numeral from 'numeral';

class Forecast extends Component {


  getIcon(name) {
    let icon = name.replace(/-/g, "_");
    icon = icon.toUpperCase();
    return (
      <Skycons color="white" icon={icon} />
    )
  }

  hourlyForecast(days) {

  }

  render () {

    let current = this.props.darkSky.currently;
    let daily = this.props.darkSky.daily;
    let today = this.props.darkSky.daily.data[0];
    let minutely = this.props.darkSky.minutely;

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
              <div className="card-body forecast">
                <div className="row">
                  <div className="col-md-4 p-0 d-inline-block">
                    <div className="mt-4">
                      {this.getIcon(current.icon)}
                    </div>
                  </div>
                  <div className="col-md-8 d-inline-block">
                    <div className="temp">
                    {`${numeral(current.temperature).format('00')}º`}
                    </div>
                    <strong> {current.summary}</strong>
                    <br /> 
                    {minutely.summary}
                    <br />
                    {`Humidity: ${numeral(current.humidity).format('0%')}`} | {`Dew Point: ${numeral(current.dewPoint).format('00')}º`}
                    <br />
                    {`Cloud Cover: ${numeral(current.cloudCover).format('0%')}`} | {`Pressure: ${numeral(current.pressure).format('00.00')}`}
                    <br />
                    {`Wind Speed: ${numeral(current.windSpeed).format('0.0')} mph`} | {`Visibility: ${current.visibility} mi`}
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
              <div className="card-body forecast">
                <div className="row">
                  <div className="col-md-4 p-0 d-inline-block">
                    <div className="mt-4">
                      {this.getIcon(daily.icon)}
                    </div>
                  </div>
                  <div className="col-md-8 d-inline-block">
                    <div className="text-primary inline font30 pr-3">
                      <strong>{`${numeral(today.temperatureHigh).format('00')}º`}</strong>
                    </div>
                    <div className="text-info inline font30">
                      <strong>{`${numeral(today.temperatureLow).format('00')}º`}</strong>
                    </div>
                    <br />
                    <p className="mb-0">
                      <strong>{today.summary}</strong>
                    </p>
                    <p className="mb-0">
                      <small>{`Humidity: ${numeral(today.humidity).format('0%')}`} </small>
                        |
                      <small> {`Chance of Rain: ${numeral(today.precipProbability).format('0%')}`} </small>
                        |
                      <small> Wind: {(today.windSpeed < 1) ? 1 : `${numeral(today.windSpeed).format('0.0')}`} mph</small>
                    </p>
                    <p>
                      <small>Sunrise: {moment(today.sunriseTime * 1000).tz(this.props.darkSky.timezone).format('hh:mm a')} </small>
                        |
                      <small> Sunset: {moment(today.sunsetTime * 1000).tz(this.props.darkSky.timezone).format('hh:mm a')}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <h4 className="text-white font-weight-light my-2" style={{marginLeft: "15px"}}>Next Few Hours</h4>
        </div>
        {/*hourly forecast*/}
        {this.hourlyForecast(daily.data)}
        <div className="row mt-5">
          <h4 className="text-white font-weight-light my-2" style={{marginLeft: "15px"}}>
            This Week's Forecast | <small className="text-info hidden-xs-down">{daily.summary}</small>
          </h4>
        </div>
        {/*Weekly Forecasr*/}

      </div>
    )
  }
}

export default Forecast;