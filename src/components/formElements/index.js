import React, { Component } from 'react';

import Checkbox from './checkbox/checkbox';
import InputText from './inputText/inputText';
import Radio from './radio/radio';
import Select from './select/select';

export default class FormElements extends Component {
  constructor() {
    super();
    this.state = {
      defaultInputTextValue: 'im a default value'
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event) {
    this.setState({
      defaultInputTextValue: event.target.value
    });
  }
  render() {
    return (
      <div className="container">
        <div className="card">
          <h3>Radio buttons</h3>
          <Radio label="im a radio button" name="radio" />
          <Radio label="im yet another radio" name="radio" />
        </div>
        <div className="card">
          <h3>Checkboxes</h3>
          <Checkbox label="i'm a normal checkbox" />
          <Checkbox disabled label="disabled checkbox" />
        </div>
        <div className="card">
          <h3>Select</h3>
          <Select name="myselect" label="Select a value">
            <option value="1">something1</option>
            <option value="2">something2</option>
            <option value="3">something3</option>
            <option value="4">something4</option>
            <option value="5">something5</option>
            <option value="6">something6</option>
          </Select>
          <Select name="myselect" disabled label="Disabled style">
            <option value="1">something1</option>
            <option value="2">something2</option>
            <option value="3">something3</option>
            <option value="4">something4</option>
            <option value="5">something5</option>
            <option value="6">something6</option>
          </Select>
        </div>

        <div className="card">
          <h3>Text inputs</h3>
          <InputText placeholder="Im a placeholder" onChange={this.handleOnChange} />
          <InputText placeholder="Im a placeholder with a value" value={this.state.defaultInputTextValue} onChange={this.handleOnChange} />
          <InputText placeholder="Im a placeholder with a value" disabled onChange={this.handleOnChange} />
        </div>
      </div>
    );
  }
}