import React, { Fragment } from 'react';
import './ProductPreviewCard.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
// import Modal from '../UI/Modal';

import starImg from '../../assets/star.png';
import Card from '../UI/Card';
import Button from '../UI/Button';

const ProductPreviewCard = ({id, img, name, price, description, category, ingredients}) => {
    const dispatch = useDispatch();
    const addToCartHandler = (e) => {
        e.preventDefault();
        dispatch(
            cartActions.addItemToCart({
            id, name, price, img
        }));   
    }
    return (
        <Card className='prod-preview-card'>
            <img src={img} alt='food'/>
            <div className='prod-preview-card__info'>
                <h1>{name}</h1>
                <div className='prod-preview-card-rating'>
                    <img src={starImg} alt='star icon' />
                    <img src={starImg} alt='star icon' />
                    <img src={starImg} alt='star icon' />
                    <img src={starImg} alt='star icon' />
                    <img src={starImg} alt='star icon' />
                </div>
                <span>{price}</span>
                <p>{description}</p>
                <span>Category : {category}</span>                    
                <p>Ingredients: {ingredients}</p>
                <Button label='Add to Cart' type='submit' submitBtn className='' onClick={addToCartHandler} primary/>
            </div>
        </Card>
    )
}

export default ProductPreviewCard