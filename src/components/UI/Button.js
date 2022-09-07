import React, { Fragment } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({primary, onClick, to, label, className, type}) => {
    const btnClassName = primary ? 'btn-primary' : 'btn-secondary';

    return (
        <Fragment>
            {type && (
                <button type={type} className={`btn ${btnClassName} ${className ? className : ''}`} onClick={onClick}>
                    <span>{label}</span>
                </button>
            )}

            { !type && (
                <Link to={to}>
                    <button className={`btn ${btnClassName} ${className ? className : ''}`}>
                        <span>{label}</span>
                    </button>
                </Link>
            )}
        </Fragment>
    )
}

export default Button