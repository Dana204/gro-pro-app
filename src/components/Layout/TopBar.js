import React from 'react';
import './TopBar.css';

import ContactLink from '../ExternalLinks/ContactLink';
import SocialLink from '../ExternalLinks/SocialLink';

import emailIcon from '../../assets/email.png';
import phoneIcon from '../../assets/phone.png';
import instagramIcon from '../../assets/instagram.png';
import facebookIcon from '../../assets/facebook.png';
import twitterIcon from '../../assets/twitter.png';

const TopBar = () => {
    return (
        <div className='top-bar'>
            <div className='container'>
                <div className='top-bar__contact'>
                <ContactLink
                    src = {emailIcon}
                    alt='email icon'
                    label='gropro@gmail.com'
                    action='mailto:gropro@gmail.com'
                />

                <ContactLink
                    src = {phoneIcon}
                    alt='phone icon'
                    label='876-883-9999'
                    action='tel:8768839999'
                />
                </div>
                <div className='top-bar__social'>
                    <SocialLink socialPath='#' src={instagramIcon} alt='instagram icon' />
                    <SocialLink socialPath='#' src={facebookIcon} alt='facebook icon' />
                    <SocialLink socialPath='#' src={twitterIcon} alt='twitter icon' />
                </div> 
            </div>
        </div>
    )
}

export default TopBar