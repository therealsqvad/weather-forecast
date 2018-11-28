/* eslint-disable react/no-find-dom-node */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';

const yellowTheme = createMuiTheme({
  palette: { type: 'dark', primary: yellow },
  typography: {
    useNextVariants: true
  }
});

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});


class Filter extends Component {
    state = {
      metric: localStorage.getItem('metric') === null ? 'C' : localStorage.getItem('metric'),
      TTL: localStorage.getItem('TTL') === null ? '60' : localStorage.getItem('TTL'),
      labelWidth: 0,
      labelWidthTTL: 0
    };

    componentDidMount() {
      this.setState({
        labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        labelWidthTTL: ReactDOM.findDOMNode(this.InputLabelRefa).offsetWidth
      });
    }

    handleChangeMetric = event => {
      localStorage.setItem('metric', event.target.value);
      this.setState({ metric: event.target.value });
    };

    handleChangeTTL = event => {
      localStorage.setItem('TTL', event.target.value);
      this.setState({ TTL: event.target.value });
    };

    render() {
      const { classes } = this.props;
      const {
        labelWidth, labelWidthTTL, metric, TTL
      } = this.state;

      return (
        <MuiThemeProvider theme={yellowTheme}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-metric-simple"
            >
          Metric
            </InputLabel>
            <Select
              value={metric}
              onChange={this.handleChangeMetric}
              input={(
                <OutlinedInput
                  labelWidth={labelWidth}
                  name="metric"
                  id="outlined-metric-simple"
                />
              )}
            >
              <MenuItem value="C">Celsium</MenuItem>
              <MenuItem value="F">Farengate</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={refa => {
                this.InputLabelRefa = refa;
              }}
              htmlFor="outlined-TTL-simple"
            >
          TTL
            </InputLabel>
            <Select
              value={TTL}
              onChange={this.handleChangeTTL}
              input={(
                <OutlinedInput
                  labelWidth={labelWidthTTL}
                  name="TTL"
                  id="outlined-TTL-simple"
                />
              )}
            >
              <MenuItem value="60">One minute</MenuItem>
              <MenuItem value="600">10 minutes</MenuItem>
            </Select>
          </FormControl>
        </MuiThemeProvider>
      );
    }
}

Filter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Filter);
