import React, { Component } from 'react';
import logoText from './../images/logo-text.png';

export default class LogoAndTagline extends Component {
  render() {
    return (
      <div className='logo-tagline'>
        <img src={logoText} className='logo' alt="logo" />
        <p className='tag-line'>Life is about to get more comfortable</p>
      </div>
    )
  }
}
