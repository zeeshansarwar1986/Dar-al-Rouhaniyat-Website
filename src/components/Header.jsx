import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onOpenCart, cartCount }) => {
  return (
    <header className="main-header">
      <div className="top-bar">
        <div className="contact-info">
          <span>📞 +92 300 1234567</span>
          <span>📧 info@daralrouhaniyat.com</span>
        </div>
        <div className="social-links">
          <span>FB</span> | <span>IG</span> | <span>YT</span>
        </div>
      </div>
      <div className="nav-container">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1>دار الروحانیت</h1>
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/">ہوم (Home)</Link></li>
            <li><Link to="/gems">جواہرات (Gems)</Link></li>
            <li><Link to="/about">ہمارے بارے میں (About us)</Link></li>
            <li><Link to="/team">ہماری ٹیم (Our Team)</Link></li>
            <li><Link to="/feedback">فیڈ بیک (Feedback)</Link></li>
            <li><Link to="/help">مدد (Help)</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <div className="search-bar">
            <input type="text" placeholder="تلاش کریں..." />
          </div>
          <button className="cart-toggle-btn" onClick={onOpenCart}>
            🛒 <span className="cart-badge">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
