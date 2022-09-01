import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

import userIcon from '../../assets/user.png';
import likesIcon from '../../assets/heart-outline.png';
import cartIcon from '../../assets/cart.png';

import Logo from '../UI/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Navbar from './Navbar';
import './Header.css';


const Header = () => {
    const dispatch = useDispatch();
    // const totalCartQuantity = useSelector((state) => state.cart.totalCartQuantity);
    const cartItems = useSelector((state) => state.cart.items);

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
                        <img src={likesIcon} alt='likes icon' className='rotate' />
                        <span>0</span>
                    </div>
                    <div>
                        <img src={cartIcon} alt='cart icon' className='rotate' onClick={toggleCartHandler} />
                        <span>{cartItems.length}</span>
                        {/* <span>{totalCartQuantity}</span> */}
                    </div>
                </div>
            </div>
            <Navbar /> 
        </header>
    )
}

export default Header