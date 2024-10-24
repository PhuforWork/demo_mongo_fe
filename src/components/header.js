// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css'; // Nhớ liên kết file CSS
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import icon giỏ hàng
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import icon tài khoản


const Header = () => {

     return (
          <header className="header">
               <div className="header-content">
                    <div className="logo">
                         <img className='img-logo' src="/MedicalDevicelogo.png" alt="Logo" />
                         <div className='text-logo'>Thiết bị <br /> Y tế Trường Thịnh</div>
                    </div>
                    {/* Khối navigation */}
                    <nav className="nav">
                         <ul>
                              <li>
                                   <NavLink to="/" exact activeClassName="active">Trang Chủ</NavLink>
                              </li>
                              <li>
                                   <NavLink to="/products" activeClassName="active">Sản Phẩm</NavLink>
                              </li>
                              <li>
                                   <NavLink to="/about" activeClassName="active">Giới Thiệu</NavLink>
                              </li>
                              <li>
                                   <NavLink to="/contact" activeClassName="active">Liên Hệ</NavLink>
                              </li>
                         </ul>
                    </nav>

                    <div className="icons">
                         <ShoppingCartIcon className="icon" />
                         <AccountCircleIcon className="icon" />
                    </div>
               </div>
          </header>
     );
};

export default Header;