import React, { Component } from 'react'
import { DotLoader } from 'react-spinners';

class Loader extends Component {
  render() {
    return (
      <div>
        <div>
          <DotLoader color={'#17a2b8'} loading={this.props.loading}/>
        </div>
        <div>
          <p className="lead text-white">Loading</p>
        </div>
      </div>
    )
  }
}

export default Loader;