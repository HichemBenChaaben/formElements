import './radio.css';

import React, { Component } from 'react';

export default class Radio extends Component {
  render() {
    return (
      <label className="control">
        {this.props.label}
        <input type="radio" {...this.props} />
        <span className="indicator"></span>
      </label>
    );
  }
}