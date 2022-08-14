import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';
import './Logo.css';

const Logo = ({className}) => {
    return (
        <Link to='/' className={`${className ? className : ''} logo`}>
            <img src={logoImg} alt='logo'/>
            GroPro
        </Link>
    )
}

export default Logo