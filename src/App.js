import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { sendCartData, fetchCartData } from './store/cart-actions';

import Cart from './components/Cart/Cart';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Category from './pages/Category';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';


let isInitialRun = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  
  useEffect(() => {
    if (isInitialRun) {
      isInitialRun = false;
      return;
    }

    if(cart.changed) {
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch]);
  

  return (
    <Layout>
      {showCart && <Cart />}
      <Routes> 
        <Route index element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/services' element={<Services />} /> 
        <Route path='/contact-us' element={<Contact />} /> 
        <Route path='/blog' element={<Blog />} />  
        <Route path='category/:categoryName' exact element={<Category />} />
        <Route path='products/:productId/:productName' exact element={<ProductDetail />} />
        <Route path='/favourites' element={<Favourites />} />  
        <Route path='*' element={<NotFound />} />
        {/* <Route path='/*' element={<Navigate replace to='/' />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
