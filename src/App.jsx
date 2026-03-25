import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import GemsPage from './pages/GemsPage'
import AboutPage from './pages/AboutPage'
import TeamPage from './pages/TeamPage'
import FeedbackPage from './pages/FeedbackPage'
import HelpPage from './pages/HelpPage'
import CartDrawer from './components/CartDrawer'
import ContactButtons from './components/ContactButtons'
import './App.css'
import './components/CartDrawer.css'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div className="app">
        <Header onOpenCart={() => setIsCartOpen(true)} cartCount={cartCount} />
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cartItems} 
          onRemove={removeFromCart}
        />
        <main>
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
            <Route path="/gems" element={<GemsPage onAddToCart={addToCart} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
          <ContactButtons />
        </main>
        <footer style={{ backgroundColor: '#2d2d2d', color: 'white', padding: '3rem 5%', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
          <p>© 2026 دار الروحانیت - تمام حقوق محفوظ ہیں۔</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
