import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { favActions } from '../../store/fav-slice';

import Button from '../UI/Button';
import './MenuItem.css';

import heartFillImg from '../../assets/heart-fill.png';
import heartOutlinedImg from '../../assets/heart-outline.png';

const MenuItem = (props) => {
    const { name, price, description, src, id } = props;

    const [isClicked, setIsClicked] = useState(false);
    const dispatch = useDispatch();
  
    const addToCartHandler = () => {
      dispatch(
        cartActions.addItemToCart({
        id, name, price
      }));
    }

    const addToFavHandler = () => {
        dispatch (
            favActions.addToFavourites({
                name, price, description, src, id
            })
        )
    }

    const removeFromFavHandler = () => {
        dispatch(favActions.removeFromFavourites(id))
    }
    
    const onClickToggleImgHandler = () => {
        setIsClicked(!isClicked);
        // if(isClicked){
        //     addToFavHandler();
        // } else {
        //     removeFromFavHandler();
        // }
    }

    if(isClicked){
        addToFavHandler();
    } else {
        removeFromFavHandler();
    }


    

    const isLikedIcon = isClicked ? heartFillImg : heartOutlinedImg;
    

    return (
        <div className='menu__item'>
            <div className='menu__item-header'>
                <img src={src} alt={name} />
                <div>
                    <img src={isLikedIcon} alt='favourite' onClick={onClickToggleImgHandler} />
                </div>
            </div>
            <div className='menu__item-body'>
                <div>
                    <span>{name}</span>
                    <span>${parseFloat(price).toFixed(2)}</span>
                </div>
                <p>{description}</p>
                <Button primary onClick={addToCartHandler}>Add to Cart</Button>
            </div>
        </div>
    )
}

export default MenuItem