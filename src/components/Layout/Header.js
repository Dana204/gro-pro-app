import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import Navbar from './Navbar';

import logo from '../../assets/logo.png';
import userIcon from '../../assets/user.png';
import likesIcon from '../../assets/heart-outline.png';
import cartIcon from '../../assets/cart.png';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../UI/Logo';


const Header = () => {
    const dispatch = useDispatch();
    const totalCartQuantity = useSelector((state) => state.cart.totalCartQuantity);

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    }

    return (
        <header>
            <div className='header__top container'>
                <Logo />
                <SearchBar className='header__top-search-bar'/>
                <div className='header__top-right'>
                    <div>
                        <img src={userIcon} alt='user icon' className='rotate' />
                    </div>
                    <div>
                        <Link to='/favourites'>
                        <img src={likesIcon} alt='likes icon' className='rotate' />
                        </Link>
                        <span>0</span>
                    </div>
                    <div>
                        <img src={cartIcon} alt='cart icon' className='rotate' onClick={toggleCartHandler} />
                        <span>{totalCartQuantity}</span>
                    </div>
                </div>
            </div>
            <Navbar /> 
        </header>
    )
}

export default Header