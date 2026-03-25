import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, price, oldPrice, image, category, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        {oldPrice && <span className="sale-badge">SALE</span>}
        <img src={image} alt={name} className="product-image" />
        <div className="image-overlay">
          <img src="https://via.placeholder.com/40/b71c1c/ffffff?text=DR" alt="Logo" className="card-mini-logo" />
        </div>
      </div>
      <div className="product-details">
        <h3 className="product-title">{name}</h3>
        <div className="price-container">
          {oldPrice && <span className="old-price">{oldPrice} Rs</span>}
          <span className="current-price">{price} Rs</span>
        </div>
        <button className="add-to-cart-btn" onClick={() => onAddToCart(name)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
