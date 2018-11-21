import React, { Component } from 'react';
import WeatherPage from './WeatherPage';
import actions from '../actions/weather';
import { store } from '../index';

class App extends Component {
  componentDidMount() {
    console.log('component didmount');
    store.dispatch(actions.getCurrentLoc());
  }

  render() {
    return (
      <div>

        <WeatherPage />

      </div>
    );
  }
}

export default App;
