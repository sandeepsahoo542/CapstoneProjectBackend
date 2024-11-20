import React from 'react';
import '../styles/FAQs.css';

const FAQs = () => {
  return (
    <div className="faqs-container">
      <header className="header">
        <div className="logo">Swiss Bank</div>
      </header>
      <main className="main-content">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h3>What services does Swiss Bank offer?</h3>
          <p>Swiss Bank offers a variety of banking services including savings accounts, credit lines, investment options, and more.</p>
        </div>
        <div className="faq">
          <h3>How can I open an account?</h3>
          <p>You can open an account by visiting our branch or registering online through our website.</p>
        </div>
        <div className="faq">
          <h3>How can I contact customer support?</h3>
          <p>You can contact our customer support 24/7 via phone, email, or live chat on our website.</p>
        </div>
        <div className="faq">
          <h3>What are your operating hours?</h3>
          <p>Our branches operate from 9 AM to 6 PM, Monday to Friday. Our online services are available 24/7.</p>
        </div>
      </main>
    </div>
  );
};

export default FAQs;
