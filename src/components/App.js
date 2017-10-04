import React, { Component } from 'react';
import LogoAndTagline from './LogoAndTagline';
import SocialMediaBar from './SocialMediaBar';
import CountdownBox from './CountdownBox';
import tee from './../images/tee-with-strypes.png';
import './../styles/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      days: 14,
      hours: 12,
      minutes: 43,
      seconds: 36
    }
  }
  countdown() {
    const countdownDate = new Date('Oct 16, 2017 00:00:00').getTime();
    setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.setState({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: minutes >= 10 ? minutes : '0' + minutes,
        seconds: seconds >= 10 ? seconds : '0' + seconds
      })
    }, 1000);
  }
  componentDidMount() {
    this.countdown();
  }
  render() {
    const {days, hours, minutes, seconds} = this.state;
    return (
      <div id='container'>
        <LogoAndTagline />
        <CountdownBox days={days} hours={hours} seconds={seconds} minutes={minutes} />
        <div className='orange'></div>
        <div className='white'></div>
        <div className='pearl'></div>
        <img src={tee} className='tee' alt="t-shirt" />
        <SocialMediaBar />
      </div>
    );
  }
}

export default App;
