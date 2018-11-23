import React, { Component } from 'react';
import WeatherPage from './WeatherPage';
import actions from '../actions/weather';
import { store } from '../index';
import MapContainer from '../components/MapContainer/MapContainer';


class App extends Component {
  componentDidMount() {
    console.log('component didmount');
    store.dispatch(actions.getCurrentLoc());
  }

  render() {
    return (
      <div>

        <WeatherPage />
        <MapContainer lat={55.24} lon={54.3} weatherIcon={3} />

      </div>
    );
  }
}

export default App;
