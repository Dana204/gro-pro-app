import React, { Fragment } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({primary, onClick, to, label, className, submitBtn, type}) => {
    const btnClassName = primary ? 'btn-primary' : 'btn-secondary';

    return (
        <Fragment>
            {submitBtn && (
                <button type={type} className={`btn ${btnClassName} ${className ? className : ''}`} onClick={onClick}>
                    <span>{label}</span>
                </button>
            )}

            { !submitBtn && (
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