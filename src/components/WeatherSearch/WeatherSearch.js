import React from 'react';
import { Button } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
// import WeatherCard from '../WeatherCard/WeatherCard';
import styles from './WeatherSearch.css';
import SearchDate from '../SearchDate/SearchDate';

const yellowTheme = createMuiTheme({
  palette: { primary: yellow },
  typography: {
    useNextVariants: true
  }
});

const WeatherSearch = ({
  // eslint-disable-next-line react/prop-types
  searchText = '', loading, error, weatherList = [], actions
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
      <div style={{ textAlign: 'center', marginTop: 5, marginBottom: 5 }}>
        <MuiThemeProvider theme={yellowTheme}>
          <Button color="primary" variant="contained" onClick={() => actions.fetchWeather()} disabled={loading}>
            {loading ? 'Loading...' : 'Get weather'}
          </Button>
          <br />
          <SearchDate />
        </MuiThemeProvider>

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
