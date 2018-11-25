import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/weather';
// import { DateFormatInput } from 'material-ui-next-pickers';

class SeacrhDate extends Component {
  state = {
    date: `${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}`,
    now: `${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}`
  };

  onChangeDate = date => {
    console.log('Date: ', date.target.value);
    this.setState({ date: date.target.value });
    const { disp } = this.props;

    disp(date.target.value);
  }

  render() {
    const { date, now } = this.state;
    const max = new Date(now);

    max.setDate(max.getDate() + 10);
    const maxstr = `${max.getFullYear()}-${max.getMonth() + 1}-${max.getDate() < 10 ? '0' : ''}${max.getDate()}`;

    return (
      <input
        type="date"
        name="calendar"
        value={date}
        max={maxstr}
        min={now}
        onChange={this.onChangeDate}
      />
    );
  }
}

SeacrhDate.propTypes = {
  disp: PropTypes.func.isRequired
};

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    disp: date => {
      dispatch(actions.setSearchDate(date));
    }
  })
)(SeacrhDate);
