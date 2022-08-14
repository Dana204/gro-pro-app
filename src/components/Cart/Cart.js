import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

import Card from '../UI/Card';
import CartItem from './CartItem';
import Button from '../UI/Button';
import closeCartImg from '../../assets/close2.png';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  
  const cartIsEmpty = cartItems.length === 0;
  const dispatch = useDispatch();

  const cartTotalCost = useSelector(state => 
    state.cart.totalCartCost
  );

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  }

  const cartList = cartItems.map(item => (
    <CartItem
      key={item.id}
      item = {{ 
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        totalPrice: item.price,
      }}
    />
  ))

  return (
   <div className='container'>
      <Card className='cart'>
        <Card green className='cart__header'>
          <img src={closeCartImg} alt='close' onClick={toggleCartHandler} />
          <span>My Cart</span>
        </Card>
        <div className='cart__list'>
          { cartIsEmpty ? <p className='cart-empty'>Cart is empty</p> : cartList }
        </div>
        <Card green className='cart__footer'>
          <span>Total: ${cartTotalCost.toFixed(2)}</span>
          <Button label='Checkout' />
        </Card>
    </Card>
   </div>
  )
}

export default Cart