/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
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
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class WeatherSearch extends Component {
  state = {
    text: ''
  }

  render() {
    const { text } = this.state;
    const {
      loading, error, actions, classes
    } = this.props;

    return (
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
                value={text}
                onChange={event => {
                  actions.setSearchText(event.target.value);
                  this.setState({ text: event.target.value });
                }}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    actions.fetchWeather();
                  }
                }}
              />
              <br />
              <div style={{ minHeight: '55px', alignItems: 'center' }}>
                {loading ? <CircularProgress className={classes.progress} size={20} /> : (
                  <Button color="primary" variant="contained" onClick={() => actions.fetchWeather()} disabled={loading}>
                    {loading ? 'Loading...' : 'Get weather'}
                  </Button>
                )}
              </div>
              <div style={{ margin: '5px' }}>
                <Button color="primary" variant="contained" onClick={() => actions.getCurrentLoc()}>
                  {'Geoposition'}
                </Button>
              </div>
              <br />
              <SearchDate />
            </MuiThemeProvider>

          </div>

          {
            error && <div>Error trying to fetch a forecast</div>
          }
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(WeatherSearch);
