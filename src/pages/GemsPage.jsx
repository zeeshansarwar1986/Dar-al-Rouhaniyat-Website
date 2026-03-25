import React from 'react';
import ProductCard from '../components/ProductCard';
import './GemsPage.css';

const gemstones = [
  { id: 1, name: 'Dur E Najaf Stone', price: '11,100', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/Dur-E-Najaf-640x640.avif' },
  { id: 2, name: 'Hematite Hadeed Stone of Stability', price: '11,100', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/Hadeed-640x640.avif' },
  { id: 3, name: 'Alexandrite علی جندرہ', price: '11,700', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/Alexndrtite-jpg.avif' },
  { id: 4, name: 'Rose Quartz Stone of Pure Love', price: '12,900', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/rose-quartz2-jpg.avif' },
  { id: 5, name: 'Buy Red Coral Stone Marjan online Pakistan', price: '15,000', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/red-coral-stone-for-astrological-purpose-1000x1000-1-jpg.avif' },
  { id: 6, name: 'Carnelian Stone Buy Online Free Delivery', price: '8,400', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/carnelian-jpeg.avif' },
  { id: 7, name: 'Malachite online Price', price: '6,300', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/Malachite-640x640.avif' },
  { id: 8, name: 'Aquamarine Stone of peace', price: '12,600', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/AquamarineGemstone_2-jpg.avif' },
  { id: 9, name: 'Tigers Eye stone of self-confidence', price: '9,900', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/tigers-eye-gem_2_large-jpg.avif' },
  { id: 10, name: 'Cats Eye (لہسنیا)', price: '10,500', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/IMG-20250312-WA0014-300x300.avif' },
  { id: 11, name: 'Mossonite Diamond buy online', price: '27,000', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/Mossonite-300x300.avif' },
  { id: 12, name: 'White Coral (Safed Monga)', price: '11,700', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/White-Coral2-300x300.avif' },
  { id: 13, name: 'Peridot Stone of unconditional love', price: '13,500', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/Peridot-300x300.avif' },
  { id: 14, name: 'SUN STONE Price', price: '8,700', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/Sunstone-300x300.avif' },
  { id: 15, name: 'Sang Sitara Stone Price', price: '6,900', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/Sang-Sitara-300x300.avif' },
  { id: 16, name: 'Zircon Stone of Mental focus', price: '6,900', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/zirqon-jpg-300x300.avif' },
  { id: 17, name: 'MOH E NAJAF', price: '9,300', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/Mohe-najaf-3-300x300.avif' },
  { id: 18, name: 'White Topaz', price: '13,500', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/White-Sapphire-300x300.avif' },
  { id: 19, name: 'Red Jasper Immunity Stone', price: '9,300', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/red-jaspre-jpg-300x300.avif' },
  { id: 20, name: 'Ruby Star Stone of protection', price: '8,700', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/Star-ruby-300x300.avif' },
  { id: 21, name: 'Citrine Stone Sunela', price: '9,600', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/IMG-20250312-WA0006-300x300.avif' },
  { id: 22, name: 'Pearl Moti Stone of Calmness', price: '11,100', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/Pearl2-300x300.avif' },
  { id: 23, name: 'Emerald Stone Of Wisdom (Zumurd)', price: '27,000', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/Zumur-300x300.avif' },
  { id: 24, name: 'OPAL Stone of attraction and beauty', price: '18,000', category: 'Zanjani Gems', image: 'https://zanjani.pk/wp-content/uploads/2023/05/opal-2-1-jpeg-300x300.avif' },
];

const GemsPage = ({ onAddToCart }) => {
  return (
    <div className="gems-page-container">
      <aside className="sidebar">
        <div className="filter-group">
          <input type="text" placeholder="Find a category" className="category-search" />
          <div className="checkbox-item">
            <input type="checkbox" id="zanjani-gems" defaultChecked />
            <label htmlFor="zanjani-gems">Zanjani Gems</label>
          </div>
        </div>

        <div className="filter-group">
          <h4>FILTER BY PRICE</h4>
          {[ '0 - 300 Rs', '300 Rs - 500 Rs', '500 Rs - 1,000 Rs', '1,000 Rs - 3,000 Rs' ].map(range => (
            <div key={range} className="checkbox-item">
              <input type="checkbox" id={range} />
              <label htmlFor={range}>{range}</label>
            </div>
          ))}
          <div className="price-inputs">
            <input type="text" placeholder="Min" />
            <span className="dash">-</span>
            <input type="text" placeholder="Max" />
          </div>
          <button className="apply-btn">Apply</button>
        </div>

        <div className="filter-group">
          <h4>PRODUCT STATUS</h4>
          {['In stock', 'Out of stock', 'On sale'].map(status => (
            <div key={status} className="checkbox-item">
              <input type="checkbox" id={status} />
              <label htmlFor={status}>{status}</label>
            </div>
          ))}
        </div>
      </aside>

      <main className="gems-content">
        <div className="top-bar-tools">
          <div className="sort-view">
            <select className="sort-select">
              <option>Sort by popularity</option>
              <option>Sort by average rating</option>
              <option>Sort by latest</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
            </select>
            <div className="view-options">
              <span>▦</span> <span>☷</span>
            </div>
          </div>
          <div className="show-count">
            Show: <select><option>12</option><option>24</option></select>
          </div>
        </div>

        <div className="product-grid">
          {gemstones.map(gem => (
            <ProductCard key={gem.id} {...gem} onAddToCart={() => onAddToCart(gem)} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default GemsPage;
