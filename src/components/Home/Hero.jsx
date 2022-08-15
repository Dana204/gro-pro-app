import React from 'react';
import './Hero.css';

import Button from '../UI/Button';
import Card from '../UI/Card';

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
                    <div className='hero__right-card'>
                        <h2>Lorem ipsum dolor sit</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Button label='Sign Up' to='/about-us' className='hero__right-card-btn' primary/>
                    </div>
                    <div className='hero__right-card'>
                        <h2>Lorem ipsum dolor sit</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Button label='Shop Now' to='/about-us' className='hero__right-card-btn'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero