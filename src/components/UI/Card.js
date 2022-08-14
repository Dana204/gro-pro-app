import React from 'react';
import './Card.css';

const Card = ({green, className, border, children, onClick}) => {
  const bgColour = green ? 'card bg-green' : 'card bg-white';
  const cardBorder = border ? 'border-cultured' : '';

	return (
		<div 
			onClick={onClick} 
			className={`${className ? className : ''} 
			${bgColour} ${cardBorder}`}>
				{children}
		</div>
	)
}

export default Card