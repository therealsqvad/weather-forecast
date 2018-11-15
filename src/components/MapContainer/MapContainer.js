import React, { Component } from 'react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import propTypes from 'prop-types';

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

    const { lat, lon, weatherIcon } = this.props;

    return (
      <Map className="map" width="300px" height="300px" state={mapState} center={[lat, lon]} zoom={10} lang="en_US">
        <Marker lat={parseFloat(lat, 6)} lon={parseFloat(lon, 6)}>
          <MarkerLayout>
            <div style={{
              borderRadius: '8px',
              background: 'rgba(40, 44, 52, 0.3)',
              shadow: '13px',
              color: '#fff'
            }}
            >
              <img src={`../../img/${weatherIconMap[weatherIcon]}.png`} width="40px" alt="none" id="weatherIcon" />
              <span className="temperatura">
                <b>
                  {9}
                </b>
              </span>
            </div>
          </MarkerLayout>
        </Marker>
      </Map>
    );
  }
}

MapContainer.propTypes = {
  lat: propTypes.number.isRequired,
  lon: propTypes.number.isRequired,
  weatherIcon: propTypes.number.isRequired
};

export default MapContainer;
