import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

import Card from '../UI/Card';
import CartItem from './CartItem';
import Button from '../UI/Button';
import closeCartImg from '../../assets/close2.png';
import './Cart.css';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const cartTotalCost = useSelector(state => 
        state.cart.totalCartCost
    );

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    }

    const cartList = cartItems.map(item => (
        <CartItem
            key = {item.id}
            item = {{ 
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                img: item.img,
                totalPrice: item.price,
            }}
        />
    ))

    console.log('Cart Items', cartItems)

    return (
        //  <div className='container'>
        <Card className='cart'>
            <div className='cart__header'>
                <Card green className='cart__header-card'>
                    <img src={closeCartImg} alt='close' onClick={toggleCartHandler} />
                    <span>My Cart</span>
                </Card>
            </div>
            <div className='cart__list'>
                { cartItems.length === 0 ? <p className='cart-empty'>Cart is empty</p> : cartList }
            </div>
            <div className='cart__footer'>
                <Card green className='cart__footer-card'>
                    <span>Total: ${cartTotalCost.toFixed(2)}</span>
                    <Button label='Checkout' type='submit' className='product-card__body-btn' primary/>
                </Card>
            </div>
        </Card>
        // </div>
    )
}

export default Cart