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


  render () {

    let hourlyForecast = (hours) => {
      hours = [...hours];
      hours = hours.slice(1)
      let newHours = [];
      for(var i = 0; i < 6; i++) {
        newHours.push(hours[i]);
      }
      return (
      newHours.map((hour) => {
        return (
          <div key={hour.time} className="col-md-2 col-xs-6">
            <div className="card bg-dark text-white mb-4">
              <div className="card-header">
                <div className="row">
                  <div className='col d-inline-block p-0'>{this.getIcon(hour.icon)}</div>
                  <div className='col text-primary d-inline-block p-0 font20'>{numeral(hour.temperature).format('00')+"º"}</div>
                  <div className="col d-inline-block p-0" style={{marginTop: '5px'}}>{moment(hour.time * 1000).format('ha')}</div>
                </div>
              </div>
              <div className="card-body" style={{minHeight: "135px", padding: "15px"}}>
                {hour.summary}
                <br />
                <i className='fa fa-umbrella fa-2'></i> {numeral(hour.precipProbability).format('0%')}
                {(hour.precipProbability > 0) ? ' rain ' : ''}
                <br />
                <i className='fa fa-cloud fa-2'></i> {numeral(hour.cloudCover).format('0%')}
              </div>
            </div>
          </div>
          )
        })
      )
    }

    let weeklyForecast = (week) => {
      week = [...week];
      week = week.slice(1);
      return (
        week.map((day) => {
          return (
            <div key={day.time} className="col-md-4 col-xs-12">
              <div className="card bg-dark text-white mb-4">
                <div className="card-header text-warning">
                  <strong>{moment(day.time * 1000).format('dddd, MMM Do')}</strong>
                </div>
                <div className="card-body" style={{minHeight: "150px"}}>
                  <div className='row'>
                    <div className='col-md-2 d-inline-block p-0'>
                      <div className='mt-2'>{this.getIcon(day.icon)}</div>
                    </div>
                    <div className='col-md-10 d-inline-block p-0'>
                      <strong style={{fontSize: "15px"}}>{day.summary}</strong>
                      <br />
                      <div className='d-inline-block'>
                        <span className="text-primary font20 mr-2"><b>{numeral(day.temperatureHigh).format('00')+"º"}</b></span>
                        <span className="text-info font20 mr-2"><b>{numeral(day.temperatureLow).format('00')+"º"}</b></span>
                        <i className='fa fa-umbrella fa-2'></i> {numeral(day.precipProbability).format('0%')}
                        <i className='fa fa-cloud fa-2 ml-2'></i> {numeral(day.cloudCover).format('0%')}
                      </div>
                      <br />
                      <div className='d-inline-block'>
                        <small>
                          <i className='fa fa-sun-o fa-2'></i> {moment(day.sunriseTime * 1000).tz(this.props.darkSky.timezone).format('hh:mm')}
                          <i className='fa fa-moon-o fa-2 ml-2'></i> {moment(day.sunsetTime * 1000).tz(this.props.darkSky.timezone).format('hh:mm')}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      )
    }

    let current = this.props.darkSky.currently;
    let daily = this.props.darkSky.daily;
    let today = this.props.darkSky.daily.data[0];
    let minutely = this.props.darkSky.minutely;
    let hourly = this.props.darkSky.hourly.data;

    console.log(this.props.darkSky);
    return (
      <div>
        <div className="row">
          <h3 className="text-info font-weight-light my-2" style={{marginLeft: "15px"}}>{this.props.geo.city}</h3>
        </div>
        <div className="row">
          <div className="col">
            <div className="card bg-dark text-white mb-4">
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
                    {(minutely) ? minutely.summary : "No Summary available"}
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
        <div className="row">
          {hourlyForecast(hourly)}
        </div>

        <div className="row mt-5">
          <h4 className="text-white font-weight-light my-2" style={{marginLeft: "15px"}}>
            This Week's Forecast | <small className="text-info hidden-xs-down">{daily.summary}</small>
          </h4>
        </div>
          {/*Weekly Forecast*/}
        <div className="row">
          {weeklyForecast(daily.data)}
        </div>

      </div>
    )
  }
}

export default Forecast;