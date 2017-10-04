import React, {Component} from 'react';
import NumberTimeUnit from './NumberTimeUnit';

export default class CountdownBox extends Component {
  render() {
    const {days, hours, minutes, seconds} = this.props;
    return (
      <div className='countdown-box'>
        <p className='waiting-for'>What you've been waiting for.</p>
        <p className='day-title'>DAYS</p>
        <div className='counter'>
          <NumberTimeUnit number={days} timeUnit={'DAYS'} />
          <NumberTimeUnit number={hours} timeUnit={'HOURS'} />
          <NumberTimeUnit number={minutes} timeUnit={'MINUTES'} />
          <NumberTimeUnit number={seconds} timeUnit={'SECONDS'} spanColor={'span-color'}/>
        </div>
      </div>
    )
  }
}
