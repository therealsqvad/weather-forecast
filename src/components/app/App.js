import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../img/TCSlogo.svg';
import './App.css';
import MapContainer from '../MapContainer/MapContainer';
import WeatherPage from '../../containers/WeatherPage';
import actions from '../../actions/weather';
import WeatherCard from '../WeatherCard/WeatherCard';
import Filter from '../Filter/Filter';

class App extends Component {
  componentDidMount() {
    console.log('component didmount');
    // eslint-disable-next-line react/destructuring-assignment
    const { disp, store } = this.props;

    console.log(store);
    disp();
    localStorage.setItem('metric', 'C');
  }

  render() {
    const { store } = this.props;
    const { weather } = store;
    const { forecast } = weather;

    console.log('forecast in app', forecast);
    const { temp, icon } = forecast;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Filter />
          <WeatherPage />
          <MapContainer lat={55.24} lon={54.3} weatherIcon={3} />
          <a href="https://www.yahoo.com/?ilc=401" target="_blank" rel="noopener noreferrer">
            <img src="https://poweredby.yahoo.com/white.png" width="134" height="29" alt="Powered by Yahoo" />
          </a>
          {/* <span>Store: {this.props.store}</span> */}
          <WeatherCard temp={temp} icon={icon} />
        </header>
      </div>
    );
  }
}

App.propTypes = {
  disp: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired
};

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
