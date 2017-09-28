import React, { Component } from 'react';

export default class NumberTimeUnit extends Component {
  render() {
    var {number, timeUnit, spanColor} = this.props;
    return (
      <div className='number-time-unit'>
        <p className='countdown-numbers'>{number}</p>
        <p className={`time-unit ${spanColor}`}>{timeUnit}</p>
      </div>
    )
  }
}
