import React from 'react';
import { Switch, Button } from '@blueprintjs/core';
// import WeatherCard from '../WeatherCard/WeatherCard';
import styles from './WeatherSearch.css';

const WeatherSearch = ({
  // eslint-disable-next-line react/prop-types
  searchText, loading, error, weatherList = [], actions
}) => (
  <div>
    <div className={styles.searchBox}>
      <input
        type="text"
        value={searchText}
        placeholder="City"
        onChange={event => actions.setSearchText(event.target.value)}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            actions.fetchWeather();
          }
        }}
      />

      <div>
        <Button onClick={() => actions.fetchWeather()} disabled={loading} type="button">
          {loading ? 'Loading...' : 'Get weather'}
        </Button>
        <Switch checked label="Public" onChange={() => {}} />
        <Button intent="success" text="button content" onClick={() => {}} />
        <Button className="my-custom-class" text="customized button" />
      </div>
      {
        error && <div>Error trying to fetch a forecast</div>
      }
    </div>
    {
    //  weatherList.map(weather => <WeatherCard key={weather.id} {...weather} />)
    }
  </div>
);

export default WeatherSearch;
