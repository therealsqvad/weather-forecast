/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import { connect } from 'react-redux';
import actions from '../../actions/weather';

class MapContainer extends Component {
  render() {
    const weatherIconMap = [
      'storm', 'storm', 'storm', 'lightning', 'lightning', 'snow', 'hail', 'hail',
      'drizzle', 'drizzle', 'rain', 'rain', 'rain', 'snow', 'snow', 'snow', 'snow',
      'hail', 'hail', 'fog', 'fog', 'fog', 'fog', 'wind', 'wind', 'snowflake',
      'cloud', 'cloud_moon', 'cloud_sun', 'cloud_moon', 'cloud_sun', 'moon', 'sun',
      'moon', 'sun', 'hail', 'sun', 'lightning', 'lightning', 'lightning', 'rain',
      'snowflake', 'snowflake', 'snowflake', 'cloud', 'rain', 'snow', 'lightning'
    ];
    const mapState = {
      controls: ['default']
    };
    const { store } = this.props;
    const { weather } = store;
    const { forecast } = weather;
    const {
      temp, icon
    } = forecast;

    let { latitude, longitude } = forecast;

    if (latitude === undefined) {
      latitude = weather.lat;
      longitude = weather.lon;
    }

    return (
      <Map
        className="map"
        width="300px"
        height="300px"
        state={mapState}
        center={[latitude, longitude]}
        zoom={5}
        loadOptions={{ lang: 'en_US' }}
      >
        <Marker lat={parseFloat(latitude, 6)} lon={parseFloat(longitude, 6)}>
          <MarkerLayout>
            <div style={{
              borderRadius: '8px',
              background: 'rgba(33, 33, 33, 0.3)',
              shadow: '13px',
              color: '#fff'
            }}
            >
              <img src={`./icons/${weatherIconMap[icon]}.png`} width="40px" alt="none" id="weatherIcon" />
              <span className="temperatura">
                <b>
                  {temp}
                  °
                </b>
              </span>
            </div>
          </MarkerLayout>
        </Marker>
      </Map>
    );
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    disp: date => {
      dispatch(actions.setSearchDate(date));
    }
  })
)(MapContainer);
