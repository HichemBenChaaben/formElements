import './input-text.css';

import React, { Component } from 'react';

export default class InputText extends Component {

  render() {
    return (
      <label className="input-text">
        <input type="text" {...this.props} />
      </label>
    );
  }
}