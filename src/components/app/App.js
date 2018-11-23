/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../img/TCSlogo.svg';
import './App.css';
import MapContainer from '../MapContainer/MapContainer';
import WeatherPage from '../../containers/WeatherPage';
import actions from '../../actions/weather';

class App extends Component {
  componentDidMount() {
    console.log('component didmount');
    // eslint-disable-next-line react/destructuring-assignment
    this.props.disp();
    // console.log('store:', this.props.store);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <WeatherPage />
          <MapContainer lat={55.24} lon={54.3} weatherIcon={3} />

          {/* <span>Store: {this.props.store}</span> */}
        </header>
      </div>
    );
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    disp: () => {
      dispatch(actions.getCurrentLoc());
    }
  })
)(App);
