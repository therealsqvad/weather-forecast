import React from 'react';
import { Button } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
// import WeatherCard from '../WeatherCard/WeatherCard';
// import styles from './WeatherSearch.css';
import SearchDate from '../SearchDate/SearchDate';

const yellowTheme = createMuiTheme({
  palette: { primary: yellow, type: 'dark' },
  typography: {
    useNextVariants: true
  }
});

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

const WeatherSearch = ({
  // eslint-disable-next-line react/prop-types
  searchText = '', loading, error, weatherList = [], actions, classes
}) => (
  <div>
    <div className={styles.searchBox}>
      <div style={{ textAlign: 'center', marginTop: 5, marginBottom: 5 }}>
        <MuiThemeProvider theme={yellowTheme}>
          <TextField
            id="standard-search"
            label="Search city"
            type="search"
            className={classes.textField}
            margin="normal"
            value={searchText}
            onChange={event => actions.setSearchText(event.target.value)}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                actions.fetchWeather();
              }
            }}
          />
          <br />
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

export default withStyles(styles)(WeatherSearch);
