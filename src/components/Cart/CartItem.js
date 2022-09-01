import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import './CartItem.css';

const CartItem = (props) => {
    const { name, quantity, total, price, id, img: imgSource } = props.item;
    
    const dispatch = useDispatch();

    const removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(id))
    }

    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart({
            id, name, price, quantity
        }))
    }

    return (
        <div className='cart-item'>
            <img src={imgSource} alt='dd' />
            {/* <div className='cart-item__img'>
            </div> */}
            <div className='cart-item__details'>
                <div className='cart-item__details-row1'>
                    <span>{name}</span>
                    <span>{quantity}</span>
                </div>
                <div className='cart-item__details-row2'>
                    <div>
                        <span>${price}/item</span>
                        <button onClick={removeItemHandler}>-</button>
                        <button onClick={addItemHandler}>+</button>
                    </div>
                    <span>Total:<br/>${price*quantity}</span>
                    {/* <span>Total:<br/>${total}</span> */}
                </div>
            </div>
        </div>
    )
}

export default CartItem