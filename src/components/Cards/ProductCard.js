import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import Button from '../UI/Button';
import Card from '../UI/Card';
import Modal from '../UI/Modal';
import './ProductCard.css';

import heartOutlineImg from '../../assets/heart-outline.png';
import heartFillImg from '../../assets/heart-fill.png';
import viewImg from '../../assets/eye.png';
import starImg from '../../assets/star.png';
import forwardImg from '../../assets/forward.png';
import ProductPreviewCard from './ProductPreviewCard';


const ProductCard = ({id, name, price, img, rating, description, category, ingredients}) => {
    const [liked, setLiked] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);
    const dispatch = useDispatch();

    const addToCartHandler = (e) => {
        e.preventDefault();
        dispatch(
            cartActions.addItemToCart({
            id, name, price, img
        }));   
    }

    return (
        <Fragment>
            {/* {
                previewVisible && (
                    <Fragment>
                        <Modal onClick={() => setPreviewVisible(false)} />
                        <ProductPreviewCard
                            id={id}
                            img={img}
                            name={name}
                            price={price}
                            description={description}
                            category={category}
                            ingredients={ingredients}
                        />
                    </Fragment>
                )
            } */}
        <div className='product-card'>
            <div className='product-card__top'>
                <div className='product-card__top-left'>
                    <img src={liked ? heartFillImg : heartOutlineImg} alt='like icon' onClick={() => setLiked(!liked)}/>
                    <img src={viewImg} alt='view icon'  onClick={() => setPreviewVisible(!previewVisible)} />
                    <img src={forwardImg} alt='forward icon' />
                </div>
                <img src={img} alt='product'/>
                <span>${price}</span>
            </div>
            <Card className='product-card__body'>
                <div className='product-card__body-top'>
                    <div className='product-card__body-rating'>
                        <img src={starImg} alt='star icon' />
                        <img src={starImg} alt='star icon' />
                        <img src={starImg} alt='star icon' />
                        <img src={starImg} alt='star icon' />
                        <img src={starImg} alt='star icon' />
                    </div>
                    <Link to='/'>{name}</Link>
                </div>

                <Button label='Add to Cart' type='submit' submitBtn className='product-card__body-btn' onClick={addToCartHandler} primary/>
            </Card>
        </div>
        </Fragment>
    )
}

export default ProductCard