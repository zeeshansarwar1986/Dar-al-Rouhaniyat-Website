import React from 'react';

const HelpPage = () => {
  return (
    <div style={{ padding: '6rem 10%', direction: 'rtl', textAlign: 'right' }}>
      <h2 style={{ color: 'var(--primary-red)', fontSize: '3rem', marginBottom: '2rem' }}>مدد (Charity & Help)</h2>
      <div style={{ padding: '3rem', background: '#fdfdfd', borderRadius: '15px', border: '1px solid #eee', marginBottom: '3rem' }}>
        <h3 style={{ color: '#b71c1c', marginBottom: '1.5rem' }}>مستحقین کی کفالت</h3>
        <p style={{ fontSize: '1.2rem', lineHeight: '2', color: '#333' }}>
          دار الروحانیت کے اس خصوصی شعبے کا مقصد غریب اور مسکین خاندانوں کی کفالت کرنا ہے۔ ہم ان لوگوں کی مدد کرتے ہیں جو مالی مشکلات کا شکار ہیں اور جنہیں بنیادی ضروریاتِ زندگی میسر نہیں ہیں۔
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '2', color: '#333', marginTop: '1rem' }}>
          آپ کے تعاون سے ہم یتیموں کی تعلیم، بیواؤں کی مالی مدد اور بیماروں کے علاج معالجے میں اپنا حصہ ڈالتے ہیں۔ ہر ماہ درجنوں مستحق خاندانوں کو راشن اور دیگر ضروری اشیاء فراہم کی جاتی ہیں۔
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div style={{ padding: '2rem', border: '2px solid var(--gold)', borderRadius: '10px' }}>
          <h4 style={{ color: 'var(--primary-red)' }}>تعلیمی وظائف</h4>
          <p>ذہین اور مستحق طلباء کے لئے تعلیمی اخراجات کی فراہمی۔</p>
        </div>
        <div style={{ padding: '2rem', border: '2px solid var(--gold)', borderRadius: '10px' }}>
          <h4 style={{ color: 'var(--primary-red)' }}>راشن پروگرام</h4>
          <p>ماہانہ بنیادوں پر مستحق خاندانوں کو بنیادی راشن کی فراہمی۔</p>
        </div>
        <div style={{ padding: '2rem', border: '2px solid var(--gold)', borderRadius: '10px' }}>
          <h4 style={{ color: 'var(--primary-red)' }}>طبی امداد</h4>
          <p>غریب مریضوں کے لئے ادویات اور علاج معالجے میں مدد۔</p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
