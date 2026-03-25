import React from 'react';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, onClose, items, onRemove }) => {
  const subtotal = items.reduce((acc, item) => acc + (parseFloat(item.price.replace(/,/g, '')) * item.quantity), 0);

  return (
    <div className={`cart-drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <div className="cart-title">
            <div className="cart-bag-container">
              <svg className="cart-bag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <span className="cart-bag-count">{items.reduce((acc, item) => acc + item.quantity, 0)}</span>
            </div>
            <h2>Your Cart</h2>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <p className="empty-msg">Your cart is currently empty.</p>
          ) : (
            items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-main">
                  <img src={item.image} alt={item.name} className="item-thumb" />
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>{item.quantity} X {item.price} Rs = {(parseFloat(item.price.replace(/,/g, '')) * item.quantity).toLocaleString()} Rs</p>
                  </div>
                </div>
                <button className="remove-item" onClick={() => onRemove(item.id)}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="subtotal">
            <span>Subtotal:</span>
            <span>{subtotal.toLocaleString()} Rs</span>
          </div>
          <p className="shipping-notice">Shipping, taxes, and discounts calculated at checkout.</p>
          <div className="cart-actions">
            <button className="cart-action-btn primary">View Cart</button>
            <button className="cart-action-btn secondary" onClick={onClose}>Continue Shopping</button>
            <button className="cart-action-btn checkout">
              Checkout - {(subtotal + 300).toLocaleString()} Rs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
