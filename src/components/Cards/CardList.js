import React from 'react';
import './CardList.css';

const CardList = ({data, Component}) => {
    return (
        <div className='card-list'>
            { data.map((info, i) => (
                <Component key={i} {...info} />
            ))}
        </div>
    )
}

export default CardList