import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { yellow } from '@material-ui/core/colors';

const yellowTheme = createMuiTheme({
  palette: { primary: yellow },
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
      age: '',
      labelWidth: 0
    };

    componentDidMount() {
      this.setState({
        labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
      });
    }

    handleChange = event => {
      localStorage.setItem('metric', event.target.value);
      this.setState({ [event.target.name]: event.target.value });
    };

    render() {
      const { classes } = this.props;

      return (
        <MuiThemeProvider theme={yellowTheme}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-age-simple"
            >
          Metric
            </InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange}
              input={(
                <OutlinedInput
                  labelWidth={this.state.labelWidth}
                  name="age"
                  id="outlined-age-simple"
                />
              )}
            >
              <MenuItem value="C">Celsium</MenuItem>
              <MenuItem value="F">Farengate</MenuItem>
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
