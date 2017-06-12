import './checkbox.css';

import React, { Component } from 'react';

export default class Checkbox extends Component {

  render() {
    return (
      <label className="checkbox">
        <input type="checkbox" {...this.props} />
        {this.props.label}
        <span className="control"></span>
      </label>
    );
  }
}