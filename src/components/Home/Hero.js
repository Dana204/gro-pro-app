import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

import Button from '../UI/Button';
import Card from '../UI/Card';

import BananaImg from '../../assets/banana.png';
import CabbageImg from '../../assets/cabbage.png';

const Hero = () => {
    return (
        <div className=' container'>
            <div className='hero'>
                <div className='hero__left'>
                    <h1>Boost your <span>mood</span> with <span>Organic Food</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <div className='hero__left-btns'>
                        <Button label='About Us' to='/about-us'/>
                        <Button label='Shop Now' to='/category/all' primary/>
                    </div>
                    <Card className='hero__left-card'>
                        Lorem ipsum dolor sit amet
                    </Card>
                    <Card className='hero__left-card'>
                        <span>growing users</span>
                        <div>
                            <img src="https://picsum.photos/40/40" alt='user'/>
                            <img src="https://picsum.photos/40/40" alt='user'/>
                            <img src="https://picsum.photos/40/40" alt='user'/>
                            <img src="https://picsum.photos/40/40" alt='user'/>
                            <img src="https://picsum.photos/40/40" alt='user'/>
                            <div>50+</div>
                        </div>
                    </Card>
                </div>
                <div className='hero__right'>
                    <div>
                        <h2>Some Text Goes Here</h2>
                        <Link to='/about-us'>Shop Now</Link>
                        {/* <Button label='Shop Now' to='/about-us'/> */}
                        <img src={BananaImg} alt='banana' />
                    </div>
                    <div>
                        <h2>Some Text Goes Here</h2>
                        {/* <Button label='Shop Now' to='/about-us'/> */}
                        <img src={CabbageImg} alt='banana' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero