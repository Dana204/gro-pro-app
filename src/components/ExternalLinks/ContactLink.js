import React from 'react';
import './ContactLink.css';

const  ContactLink = ({src, alt, label, action, className}) => {
    const onClickHandler = (e) => {
        window.location.href = action;
        e.preventDefault();
    }

    return (
        <div onClick={onClickHandler} className={`link ${className ? className : ''}`}>
            <img src={src} alt={alt} />
            <span>{label}</span>
        </div>
    )
}

export default ContactLink