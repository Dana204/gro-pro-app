import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { categories, mainPages } from '../../data/data';

import menuImg from '../../assets/menu.png';
import categoryImg from '../../assets/category.png';
import instagramIcon from '../../assets/instagram.png';
import facebookIcon from '../../assets/facebook.png';
import twitterIcon from '../../assets/twitter.png';
import closeMenuImg from '../../assets/close.png';

import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../UI/Logo';
import SocialLink from '../ExternalLinks/SocialLink';
import Modal from '../UI/Modal';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const menuClickHandler = () => {
        setClicked(!clicked);
    }

    const closeMenuHandler = () => setClicked(false);
    const toggleImg = clicked ? closeMenuImg : menuImg;

    

    return (
        <div className='navbar'>
            {clicked && <Modal onClick={closeMenuHandler}/>}
            <div className='container'>
                <div className={clicked ? 'navbar__items active' : 'navbar__items'}>
                    <div className='navbar__items-sm'>
                        <Logo className='navbar__items-sm-logo' />
                        <SearchBar className='navbar__items-sm-search-bar' />
                    </div>
                    <nav>
                        {
                            mainPages.slice(0,-1).map((page, i) => (
                                <NavLink key={i} className={({isActive}) => isActive ? 'active' : ''} to={page.url} onClick={closeMenuHandler}>
                                    {page.name}
                                </NavLink>
                            ))
                        }
                    </nav>
                    <div className='navbar__items-sm'>
                        <SocialLink socialPath='#' src={instagramIcon} alt='instagram icon' />
                        <SocialLink socialPath='#' src={facebookIcon} alt='facebook icon' />
                        <SocialLink socialPath='#' src={twitterIcon} alt='twitter icon' />
                    </div>            
                </div>
                <img 
                    src={toggleImg}
                    alt='menu icon' 
                    onClick={menuClickHandler} 
                    className='navbar__toggler' /> 
                <div className='navbar__category'>
                    <Link to='category/all' className='navbar__category-text'>
                        <img 
                            src={categoryImg}
                            alt='category icon' 
                        /> 
                        <span>Categories</span>
                    </Link>
                    <div className='navbar__category-dropdown'>
                        {
                            categories.map((category, i) => (
                                <Link to={`/category/${category.name}`} key={i}>
                                    {category.name}
                                    <span>46</span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar