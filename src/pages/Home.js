import React, { Fragment, useState } from 'react';

import SectionHeading from '../components/UI/SectionHeading';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import CategoryCard from '../components/Cards/CategoryCard';
import ProductCard from '../components/Cards/ProductCard';
import CardList from '../components/Cards/CardList';

import mobileImg from '../assets/mobile.png';
import checkImg from '../assets/check-mark.png';

import { categories, products as data} from '../data/data';


const Home = () => {
    const [activeLabel, setActiveLabel] = useState('all');
    const [products, setProducts] = useState(data);
    // console.log(activeLabel);
    return (
        <Fragment >
            <div className='container'>
                {/* HERO SECTION */}
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

                {/* CATEGORY SECTION */}
                <SectionHeading
                    title='Wide List of Categories'
                    subtitle='Categories'
                    subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
                    btnLabel='View Products'
                    btnLink='/category/all'
                    btnPrimary
                />
                <CardList data={categories} Component={CategoryCard} rowAmount={5} /> 
            </div>
            
            {/* ABOUT SECTION */}
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
                                    <span>Healthy Meals</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </Card>
                            <Card className='slide-left'>
                                <img src={checkImg} alt='check mark'/>
                                <div>
                                    <span>Fast Delivery</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </Card>
                            <Card className='slide-left'>
                                <img src={checkImg} alt='check mark'/>
                                <div>
                                    <span>Great Customer Service</span>
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
                                    <span>Easy Sign up</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </Card>
                            <Card className='slide-right'>
                                <img src={checkImg} alt='check mark'/>
                                <div>
                                    <span>Quick Response Time</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </Card>
                            <Card className='slide-right'>
                                <img src={checkImg} alt='check mark'/>
                                <div>
                                    <span>Secure Payment</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCTS SECTION */}
            <section className='products-section container'>
                <SectionHeading
                    title='Products'
                    subtitle='Products'>
                        <div className='products-section__labels'>
                            <span onClick={() => setActiveLabel('all')} className={activeLabel === 'all' ? 'active' : ''}>All</span>
                            {
                                categories.map((category, i) => (
                                    <span key={i} onClick={() => setActiveLabel(category.name)} className={activeLabel === category.name ? 'active' : ''}>{category.name}</span>
                                ))
                            }
                        </div>
                </SectionHeading>  
                <CardList data={data} Component={ProductCard} />
            </section>
            
        </Fragment>
    )
}

export default Home
