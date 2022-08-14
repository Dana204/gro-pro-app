import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import './CartItem.css';

const CartItem = (props) => {
  const { name, quantity, total, price, id } = props.item;
  
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
        {/* <div className='cart-item__img'>
          <img src={imgSource} alt='dd' />
        </div> */}
        <div className='cart-item__details'>
          <div className='cart-item__details-row1'>
            <span>{name}</span>
            <span>{quantity}</span>
          </div>
          <div className='cart-item__details-row2'>
            <div>
              <span>${parseFloat(price).toFixed(2)}/item</span>
              <button onClick={removeItemHandler}>-</button>
              <button onClick={addItemHandler}>+</button>
            </div>
            <span>Total:<br/>${parseFloat(total).toFixed(2)}</span>
          </div>
        </div>
    </div>
  )
}

export default CartItem