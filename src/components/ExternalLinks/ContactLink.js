import React from 'react';
import { Link } from 'react-router-dom';
import './ContactLink.css';

const  ContactLink = ({src, alt, label, action}) => {
    const onClickHandler = (e) => {
        window.location.href = action;
        e.preventDefault();
    }

    return (
        <Link onClick={onClickHandler} to='#' className='link'>
            <img src={src} alt={alt} />
            {label}
        </Link>
    )
}

export default ContactLink