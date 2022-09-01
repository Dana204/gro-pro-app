import React from 'react';
import './CardList.css';

const CardList = ({data, rowAmount, Component, style}) => {
    const rowAmountClassName = rowAmount === 5 ? 'card-list__row5' : 'card-list__row4'
    return (
        <div className={`card-list ${rowAmountClassName}`} style={style}>
            { data.map((info, i) => (
                <Component key={i} {...info} />
            ))}
        </div>
    )
}

export default CardList