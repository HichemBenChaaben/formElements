import './App.css';

import React, { Component } from 'react';

import FormElements from './components/formElements';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Form Elements</h2>
        </div>
        <FormElements />
      </div>
    );
  }
}

export default App;
