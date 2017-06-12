import './select.css';

import React, { Component } from 'react';

export default class Select extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <label className="select">
        <select {...this.props}>
          <option value="">{this.props.label}</option>
          {this.props.children}
        </select>
        <div className="arrow"></div>
      </label>
    );
  }
}