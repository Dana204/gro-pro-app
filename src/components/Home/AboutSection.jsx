import React from 'react';
import './AboutSection.css';

import SectionHeading from '../UI/SectionHeading';
import Card from '../UI/Card';

import mobileImg from '../../assets/mobile.png';
import checkImg from '../../assets/check-mark.png';

const AboutSection = () => {
    return (
        <section className='about-section'>
            <div className='container'>
                <SectionHeading
                    title='Why Choose Us?'
                    subtitle='About us'
                    btnLabel='About Us'
                    btnLink='/about-us'
                />

                <div className='about-section__row'>
                    <div className='about-section__row-col'>
                        <Card className='slide-left'>
                            <img src={checkImg} alt='check mark'/>
                            <div>
                                <span>Heading</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </Card>
                        <Card className='slide-left'>
                            <img src={checkImg} alt='check mark'/>
                            <div>
                                <span>Heading</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </Card>
                        <Card className='slide-left'>
                            <img src={checkImg} alt='check mark'/>
                            <div>
                                <span>Heading</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </Card>
                    </div>
                    
                    <div className='about-section__row-col-img'>
                        <img src={mobileImg} alt='phone'/>
                    </div>
                    
                    <div className='about-section__row-col'>
                        <Card className='slide-right'>
                            <img src={checkImg} alt='check mark'/>
                            <div>
                                <span>Heading</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </Card>
                        <Card className='slide-right'>
                            <img src={checkImg} alt='check mark'/>
                            <div>
                                <span>Heading</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </Card>
                        <Card className='slide-right'>
                            <img src={checkImg} alt='check mark'/>
                            <div>
                                <span>Heading</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection