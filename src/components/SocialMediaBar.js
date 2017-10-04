import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons/lib/react-social-icons';

export default class SocialMediaBar extends Component {
  render() {
    return (
      <div className='social-media-bar'>
        <SocialIcon url='http://twitter.com/strypeslyfe' />
        <SocialIcon url='http://pinterest.com/strypesclothingcompany/pins/' />
        <SocialIcon url='http://facebook.com/strypes-clothing-company-130918477558150' />
      </div>
    )
  }
}
