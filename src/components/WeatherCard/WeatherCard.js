import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import styles from './WeatherCard.css';

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
  icon, temp, description, city, country, classes
}) => {
  // const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  const weatherIconMap = [
    'storm', 'storm', 'storm', 'lightning', 'lightning', 'snow', 'hail', 'hail',
    'drizzle', 'drizzle', 'rain', 'rain', 'rain', 'snow', 'snow', 'snow', 'snow',
    'hail', 'hail', 'fog', 'fog', 'fog', 'fog', 'wind', 'wind', 'snowflake',
    'cloud', 'cloud_moon', 'cloud_sun', 'cloud_moon', 'cloud_sun', 'moon', 'sun',
    'moon', 'sun', 'hail', 'sun', 'lightning', 'lightning', 'lightning', 'rain',
    'snowflake', 'snowflake', 'snowflake', 'cloud', 'rain', 'snow', 'lightning'
  ];

  return (
    <div className={styles.wrapper}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
          be
            {bull}
          nev
            {bull}
o
            {bull}
          lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <img src={`./icons/${weatherIconMap[icon]}.png`} width="40px" alt="icon not found" id="weatherIcon" />

            {/* <h3> */}
            {/* {description} */}
            {/* {' '} */}
            {temp}
            {/* {' '} */}
            {/* ºC */}
            {/* </h3> */}

            {/* <h1> */}
            {/* {city} */}
            {/* , */}
            {/* {' '} */}
            {/* {country} */}
            {/* </h1> */}
          </Typography>
          <Typography component="p">
          well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

WeatherCard.propTypes = {
  // icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
  // description: PropTypes.string.isRequired,
  // city: PropTypes.string.isRequired,
  // country: PropTypes.string.isRequired
};

export default withStyles(styles)(WeatherCard);
