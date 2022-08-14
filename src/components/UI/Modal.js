import React from 'react';
import './Modal.css';

const Modal = ({onClick}) => {
  return (
    <div className='modal' onClick={onClick}></div>
  )
}

export default Modal