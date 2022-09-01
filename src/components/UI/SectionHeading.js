import React, { Children } from 'react';
import './SectionHeading.css';

import Button from './Button';
// import SectionImg from '../../assets/section-title-img.png';


const SectionHeading = ({title, subtitle, subText, btnLabel, btnLink, btnSrc, btnPrimary, children}) => {
    return (
        <div className='section-title'>
            <div className='section-title__left'>
                <div>{subtitle}</div>
                <h2>{title}</h2>
            </div>
            <div className='section-title__right'>
                <p>{subText}</p>
                { btnLabel && btnLink && <Button className='section-title__right-btn' label={btnLabel} to={btnLink} src={btnSrc} primary={btnPrimary}/> }
                {children}
            </div>
        </div>
    )
}

export default SectionHeading