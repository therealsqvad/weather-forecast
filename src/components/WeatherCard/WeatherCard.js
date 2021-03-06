import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';


const yellowTheme = createMuiTheme({
  palette: { type: 'dark', primary: yellow },
  typography: {
    useNextVariants: true
  }
});

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

const WeatherCard = ({
  // eslint-disable-next-line react/prop-types
  icon, temp, city, country, classes, dayMin, dayMax, dayCode, searchDate
}) => {
  const weatherIconMap = [
    'storm', 'storm', 'storm', 'lightning', 'lightning', 'snow', 'hail', 'hail',
    'drizzle', 'drizzle', 'rain', 'rain', 'rain', 'snow', 'snow', 'snow', 'snow',
    'hail', 'hail', 'fog', 'fog', 'fog', 'fog', 'wind', 'wind', 'snowflake',
    'cloud', 'cloud_moon', 'cloud_sun', 'cloud_moon', 'cloud_sun', 'moon', 'sun',
    'moon', 'sun', 'hail', 'sun', 'lightning', 'lightning', 'lightning', 'rain',
    'snowflake', 'snowflake', 'snowflake', 'cloud', 'rain', 'snow', 'lightning'
  ];
  const iconSrc = `./icons/${weatherIconMap[dayCode]}.png`;

  return (
    <div className={styles.wrapper}>
      <MuiThemeProvider theme={yellowTheme}>

        <Card className={classes.card}>
          <CardContent>

            {temp === undefined ? <CircularProgress className={classes.progress} /> : (

              <div>
                <Typography color="primary" gutterBottom variant="h4" component="h2">
          Current weather:
                </Typography>
                <Typography className={classes.pos} variant="h5" color="textSecondary">
                  <img src={iconSrc} width="40px" alt="icon not found" id="weatherIcon" hidden={icon === undefined} />

                  {temp}
                  °
                  <br />
                  {city}
                  <br />
                  {country}
                  <br />
              Forecast on
                  {' '}
                  {searchDate}
                  {' '}
                  <br />
                  <img src={iconSrc} width="40px" alt="icon not found" id="weatherIcon" hidden={icon === undefined} />
                  {dayMin}
                  °
                  /
                  {dayMax}
                  °
                </Typography>

              </div>)}
          </CardContent>
          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
      </MuiThemeProvider>
    </div>
  );
};

WeatherCard.propTypes = {
  icon: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  dayMin: PropTypes.string.isRequired,
  dayMax: PropTypes.string.isRequired,
  dayCode: PropTypes.string.isRequired,
  searchDate: PropTypes.string.isRequired
};

export default withStyles(styles)(WeatherCard);
