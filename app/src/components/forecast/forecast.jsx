import React, { Component } from 'react';


class Forecast extends Component {
  render () {

    console.log("PROPS: ", this.props);

    return (
      <div>
        <div className="row">
          <h3 className="text-info font-weight-light my-2" style={{marginLeft: "15px"}}>{this.props.geo.city}</h3>
        </div>
        <div className="row">
          <div className="col">
            <div className="card bg-dark text-white">
              <div className="card-header"></div>
              <div className="card-body">
                <p>test</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark text-white">
              <div className="card-header"></div>
              <div className="card-body">
                <p>test</p>
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