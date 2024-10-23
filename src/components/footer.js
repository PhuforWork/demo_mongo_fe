import React from 'react';
import '../styles/footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
     return (
          <footer className="footer">
               <div className="footer-content">
                    <div className="footer-section">
                         <h4>Về Chúng Tôi</h4>
                         <p>Chúng tôi cung cấp các thiết bị y tế chất lượng cao, giúp nâng cao sức khỏe và chất lượng cuộc sống.</p>
                         <p>Địa chỉ: 123 Đường Y Tế, TP. Hồ Chí Minh</p>
                    </div>
                    <div className="footer-section">
                         <h4>Liên Hệ</h4>
                         <p>Email: support@medicaldevices.com</p>
                         <p>Điện Thoại: 0123-456-789</p>
                         <p>Thời gian làm việc: Thứ Hai - Thứ Sáu, 8:00 - 17:00</p>
                    </div>
                    <div className="footer-section">
                         <h4>Thông Tin</h4>
                         <ul>
                              <li><a href="/about">Giới Thiệu</a></li>
                              <li><a href="/products">Sản Phẩm</a></li>
                              <li><a href="/contact">Liên Hệ</a></li>
                              <li><a href="/faq">Câu Hỏi Thường Gặp</a></li>
                         </ul>
                    </div>
                    <div className="footer-section">
                         <h4>Theo Dõi Chúng Tôi</h4>
                         <div className="social-icons">
                              <a className="scl-icon" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                   <FacebookOutlinedIcon />Facebook
                              </a>
                              <a className="scl-icon" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                   <TwitterIcon />Twitter
                              </a>
                              <a className="scl-icon" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                   <InstagramIcon />Instagram
                              </a>
                         </div>
                    </div>
               </div>
               <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Medical Devices. All Rights Reserved.</p>
               </div>
          </footer>
     );
};


export default Footer;