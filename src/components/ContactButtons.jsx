import React from 'react';
import './ContactButtons.css';

const ContactButtons = () => {
  return (
    <div className="contact-buttons">
      <a href="https://wa.me/923001234567" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <span>WhatsApp</span>
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="tel:+923001234567" className="phone-float">
        <span>Call Now</span>
        <i className="fas fa-phone"></i>
      </a>
    </div>
  );
};

export default ContactButtons;
