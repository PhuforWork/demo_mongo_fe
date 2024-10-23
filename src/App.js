// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import Products from './pages/products';
import ProductDetail from './pages/productDetail';
import CartPage from './pages/cartPage';
import Checkout from './pages/checkout';

const App = () => {
     return (
          <Router>
               <Header />
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<Checkout />} />
               </Routes>
          </Router>
     );
};

export default App;