import React, { Fragment } from 'react';
import CategoryCard from '../components/Cards/CategoryCard';
import Hero from '../components/Home/Hero';
import SectionHeading from '../components/UI/SectionHeading';
import AboutSection from '../components/Home/AboutSection';

import { categories } from '../data/data';
import mobileImg from '../assets/phone-sm.png';
// import saladImg from '../images/greek-salad.jpg';
// import pastaImg from '../images/veggie-pasta.jpg';
// import burgerImg from '../images/burger.jpg';


const Home = () => {
    return (
        <Fragment >
            <Hero />
            <section className='container'>
            {/* <section className='container' style={{display: 'none'}}> */}
                <SectionHeading
                    title='Wide List of Categories'
                    subtitle='Categories'
                    subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
                    btnLabel='View Products'
                    btnLink='/category/all'
                    btnPrimary
                />
                
                {/* <div style={{display: 'flex', gap: '10px'}}>
                    {
                        categories.map((category, i) => (
                            <CategoryCard key={i} title={category.name} src={category.src} alt={category.alt} />
                        ))
                    }
                </div> */}
                {/* <img src={mobileImg} alt='phone'/> */}
                
            </section>
            <AboutSection />
            <section className='container'>
                <SectionHeading
                    title='Services'
                    subtitle='Services'
                    subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
                    btnLabel='View Products'
                    btnLink='/category/all'
                    btnPrimary
                />  
            </section>
            <section className='container'>
                <SectionHeading
                    title='Reviews'
                    subtitle='Reviews'
                    subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
                    btnLabel='View Products'
                    btnLink='/category/all'
                    btnPrimary
                />  
            </section>
            <section className='container'>
                <SectionHeading
                    title='Blogs'
                    subtitle='Blogs'
                    subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
                    btnLabel='View Products'
                    btnLink='/category/all'
                    btnPrimary
                />  
            </section>
        </Fragment>
    )
}

export default Home
