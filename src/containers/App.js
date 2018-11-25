import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WeatherPage from './WeatherPage';
import actions from '../actions/weather';
import MapContainer from '../components/MapContainer/MapContainer';


class App extends Component {
  componentDidMount() {
    const { disp } = this.props;

    disp();
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

App.propTypes = {
  disp: PropTypes.func.isRequired
};

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    disp: date => {
      dispatch(actions.getCurrentLoc());
    }
  })
)(App);
