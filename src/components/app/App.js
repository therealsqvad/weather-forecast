import React, { Component } from 'react';
import logo from '../../img/TCSlogo.svg';
import './App.css';
import MapContainer from '../MapContainer/MapContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MapContainer lat={55.24} lon={54.3} weatherIcon={3} />
        </header>
      </div>
    );
  }
}

export default App;
