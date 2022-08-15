import React from 'react';
import './Card.css';

const Card = ({green, className, children, onClick}) => {
  const bgColour = green ? 'card bg-green' : 'card bg-white';

	return (
		<div 
			onClick={onClick} 
			className={`${className ? className : ''} 
			${bgColour}`}>
				{children}
		</div>
	)
}

export default Card