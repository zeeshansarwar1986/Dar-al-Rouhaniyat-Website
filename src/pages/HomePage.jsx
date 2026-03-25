import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'یاقوت مصفا', price: '15,000', category: 'جواہرات', image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, name: 'لوحِ مریخ', price: '5,000', category: 'الواح', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, name: 'تسبیحِ عقیق', price: '2,500', category: 'تسبیحات', image: 'https://images.unsplash.com/photo-1605153322277-dd0d7f608b4d?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, name: 'آئینہ قسمت کتاب', price: '1,200', category: 'کتب', image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop' },
];

const HomePage = ({ onAddToCart }) => {
  return (
    <>
      <Hero />
      <section className="featured-categories" style={{ padding: '4rem 10%', textAlign: 'center' }}>
        <h3 style={{ color: 'var(--primary-red)', fontSize: '2.5rem', marginBottom: '3rem' }}>ہمارے خاص شعبے</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {['جواہرات', 'الواح', 'تسبیحات', 'کتب'].map((cat) => (
            <div key={cat} style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
              <h4>{cat}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-products" style={{ padding: '4rem 10%', backgroundColor: '#f9f9f9' }}>
        <h3 style={{ color: 'var(--primary-red)', fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>نمایاں مصنوعات</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {products.map(product => (
            <ProductCard key={product.id} {...product} onAddToCart={() => onAddToCart(product)} />
          ))}
        </div>
      </section>

      <section className="services-section" style={{ padding: '6rem 10%', textAlign: 'center' }}>
        <h3 style={{ color: 'var(--primary-red)', fontSize: '2.5rem', marginBottom: '4rem' }}>ہماری خصوصی خدمات</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div style={{ padding: '3rem', background: 'white', borderRadius: '15px', border: '2px solid var(--gold)' }}>
            <h4 style={{ color: 'var(--primary-red)', marginBottom: '1rem' }}>روحانی استخارہ</h4>
            <p>قرآنی آیات اور روحانی بصیرت کے ساتھ اپنے مسائل کا حل پائیں۔</p>
          </div>
          <div style={{ padding: '3rem', background: 'white', borderRadius: '15px', border: '2px solid var(--gold)' }}>
            <h4 style={{ color: 'var(--primary-red)', marginBottom: '1rem' }}>قدیم عملیات</h4>
            <p>مستند اور دیرپا اثرات کے حامل قدیم عملیات کے ذریعے کامیابی حاصل کریں۔</p>
          </div>
          <div style={{ padding: '3rem', background: 'white', borderRadius: '15px', border: '2px solid var(--gold)' }}>
            <h4 style={{ color: 'var(--primary-red)', marginBottom: '1rem' }}>نقوش و تعویذات</h4>
            <p>مخصوص مقاصد کے لیے تیار کردہ بابرکت نقوش اور تعویذات۔</p>
          </div>
        </div>
      </section>

      <section className="testimonials" style={{ padding: '6rem 10%', backgroundColor: '#2d2d2d', color: 'white', textAlign: 'center' }}>
        <h3 style={{ color: 'var(--gold)', fontSize: '2.5rem', marginBottom: '4rem' }}>ہمارے مطمئن صارفین</h3>
        <div style={{ fontStyle: 'italic', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
          <p>"دار الروحانیت کی خدمات نے میری زندگی میں سکون اور کامیابی لائی۔ ان کے الواح واقعی بابرکت ہیں۔"</p>
          <p style={{ marginTop: '1.5rem', fontWeight: 'bold', color: 'var(--gold)' }}>- محمد علی، لاہور</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
