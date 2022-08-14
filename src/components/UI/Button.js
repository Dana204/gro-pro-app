import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({primary, onClick, to, label, src, className}) => {
    const btnClassName = primary ? 'btn-primary' : 'btn-secondary';

    return (
        <Link to={to} onClick={onClick}>
            <button className={`btn ${btnClassName} ${className ? className : ''}`}>
                {src && <img src={src} alt=''/>}
                <span>{label}</span>
            </button>
        </Link>
    )
}

export default Button