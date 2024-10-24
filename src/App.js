// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import Products from './pages/products';
import CartPage from './pages/cartPage';
import Checkout from './pages/checkout';

const App = () => {
     return (
          <Router>
               <Header />
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<Checkout />} />
               </Routes>
               <Footer/>
          </Router>
     );
};

export default App;