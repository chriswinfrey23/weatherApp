import React, { Component } from "react";

const style = {
  backgroundColor: "#eee",
  height: "40px"
}
class SubNav extends Component {
  render () {
    // if(!this.props.currently) {
    //   return null;
    // }
    return (
      <nav className="navbar navbar-light justify-content-center" style={style}>
        <div className="text-center" style={{width: "100%"}}>
          <ul className="my-2 list-inline">
            <li className="list-inline-item subNav"><span className="font-weight-bold">Wind: <span className="font-weight-normal">{this.props.conditions.windSpeed}</span></span></li>
            <li className="list-inline-item subNav"><span className="font-weight-bold">Humidity: <span className="font-weight-normal">{this.props.conditions.humidity}</span></span></li>
            <li className="list-inline-item subNav"><span className="font-weight-bold">Dew Pt: <span className="font-weight-normal">{this.props.conditions.dewPoint}</span></span></li>
            <li className="list-inline-item subNav"><span className="font-weight-bold">UV Index: <span className="font-weight-normal">{this.props.conditions.uvIndex}</span></span></li>
            <li className="list-inline-item subNav"><span className="font-weight-bold">Visibility: <span className="font-weight-normal">{this.props.conditions.visibility}</span></span></li>
            <li className="list-inline-item subNav"><span className="font-weight-bold">Pressure: <span className="font-weight-normal">{this.props.conditions.pressure}</span></span></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default SubNav;