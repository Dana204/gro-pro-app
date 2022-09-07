import React from 'react';
import { Link } from 'react-router-dom';
import { mainPages } from '../../data/data';
import './Footer.css';

import ContactLink from '../ExternalLinks/ContactLink';
import Card from '../UI/Card';
import Logo from '../UI/Logo';
import Button from '../UI/Button';

import leftArrowImg from '../../assets/left-arrow.png';
import emailIcon from '../../assets/email.png';
import phoneIcon from '../../assets/phone.png';
import instagramIcon from '../../assets/instagram.png';
import facebookIcon from '../../assets/facebook.png';
import twitterIcon from '../../assets/twitter.png';

const Footer = () => {
    return (
        <footer>
            <div className='footer__top'>
                <div className='container'>
                
                    <div>
                        <div className='footer__top-col1'>
                            <span>Quick Links</span>
                            <div>
                                {
                                    mainPages.map((page, i) => (
                                        <Link key={i} to={page.url}>
                                            <img src={leftArrowImg} alt='left arrow'/>
                                            <span  className='slide-right'>{page.name}</span>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='footer__top-col2'>
                            <span>About Us</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime a unde quae eligendi nobis nemo minus consectetur optio aliquid sapiente.</p>
                        </div>
                        <div className='footer__top-col3'>
                            <span>Contact Us</span>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <ContactLink
                                src = {emailIcon}
                                alt='email icon'
                                label='gropro@gmail.com'
                                action='mailto:gropro@gmail.com'
                                className='footer__top-col3-link'
                            />
                            <ContactLink
                                src = {phoneIcon}
                                alt='phone icon'
                                label='(876)-883-9999'
                                action='tel:8768839999'
                                className='footer__top-col3-link'
                            />
                        </div>
                    </div>
                            
                    <Card className='footer__top-card'>
                        <Logo className='footer__top-card-logo' />
                        <form>
                            <label htmlFor="email">Newsletters</label>
                            <input type="email" id="email" placeholder="Enter Email"/>
                            <Button label='Subscribe' to='/about-us' type='submit' primary/>
                        </form>
                    </Card>
                </div>
            </div>
            <div className='footer__bottom '>
                <div className="container">
                    {/* <span>©2022 All Rights Reserved. Done By: Dana Campbell</span> */}
                </div>
            </div>
        
        </footer>
    )
}

export default Footer