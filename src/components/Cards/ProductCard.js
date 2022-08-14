import React from 'react';
import Card from '../UI/Card';
import './ProductCard.css';


const ProductCard = ({id, name, price, img, rating, description}) => {
    return (
        <Card className='product-card'>
            <div className='product-card__top'>
                <img src={img} alt='product'/>
            </div>
            <div className='product-card__body'>
                <span>{name}</span>
                {/* { Array(rating)
                    .fill
                    .map((_, i) => (
                        <p>*</p>
                    ))
                } */}

                <p>${price}</p>
                <p>{description}</p>
            </div>
        </Card>
    )
}

export default ProductCard