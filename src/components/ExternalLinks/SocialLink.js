import React from 'react';
import { Link } from 'react-router-dom';
import './SocialLink.css';

const SocialLink = ({src, alt,socialPath}) => {
  return (
    <Link className='social-icon' to={socialPath}>
        <img src={src} alt={alt} className='rotate' />
    </Link>
  )
}

export default SocialLink