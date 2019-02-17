import React, { Component } from 'react/';

import {greatPlaceStyle} from '../styles/Marker.js';

export default class Marker extends Component {

  render() {
    return (
       <div style={greatPlaceStyle} onClick={this.props.onClick}>
          {this.props.text}
       </div>
    );
  }
}