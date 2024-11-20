import React, { useState } from 'react';
import '../styles/IssueCreditLine.css';

const IssueCreditLine = () => {
  const [form, setForm] = useState({
    creditCardNumber: '',
    cardHolderName: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to store credit card details
    console.log('Credit card details submitted:', form);
  };

  return (
    <div className="issue-credit-line-container">
      <header className="header">
        <div className="logo">Swiss Bank</div>
      </header>
      <main className="main-content">
        <h2>Issue New Credit Line</h2>
        <form onSubmit={handleSubmit} className="credit-form">
          <div className="form-group">
            <label>Credit Card Number</label>
            <input
              type="text"
              name="creditCardNumber"
              value={form.creditCardNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Card Holder Name</label>
            <input
              type="text"
              name="cardHolderName"
              value={form.cardHolderName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Expiration Date</label>
            <input
              type="text"
              name="expirationDate"
              value={form.expirationDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input
              type="text"
              name="cvv"
              value={form.cvv}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default IssueCreditLine;
