import React, { Component } from 'react';


class Forecast extends Component {
  render () {

    console.log("PROPS: ", this.props);

    return (
      <div>
        <div className="row">
          <h3 className="text-info font-weight-normal my-2" style={{marginLeft: "15px"}}>{this.props.geo.city}</h3>
        </div>
      </div>
    )
  }
}

export default Forecast;