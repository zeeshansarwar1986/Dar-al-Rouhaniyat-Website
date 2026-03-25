import React from 'react';

const FeedbackPage = () => {
  return (
    <div style={{ padding: '4rem 5%', textAlign: 'right', minHeight: '60vh' }}>
      <h2 style={{ color: '#b71c1c', marginBottom: '2rem' }}>فیڈ بیک (Feedback)</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>آپ کی رائے ہمارے لئے بہت اہم ہے۔ براہ کرم اپنا فیڈ بیک ذیل میں درج کریں:</p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px', marginLeft: 'auto' }}>
        <input type="text" placeholder="آپ کا نام" style={{ padding: '10px', border: '1px solid #ddd' }} />
        <textarea placeholder="آپ کا پیغام" style={{ padding: '10px', border: '1px solid #ddd', minHeight: '150px' }}></textarea>
        <button type="submit" style={{ backgroundColor: '#b71c1c', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}>ارسال کریں</button>
      </form>
    </div>
  );
};

export default FeedbackPage;
