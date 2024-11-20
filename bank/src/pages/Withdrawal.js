import React, { useState } from 'react';
import '../styles/Withdrawal.css';

const Withdrawal = () => {
  const [form, setForm] = useState({
    accountNumber: '',
    amount: '',
    description: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to store withdrawal details
    console.log('Withdrawal details submitted:', form);
  };

  return (
    <div className="withdrawal-container">
      <header className="header">
        <div className="logo">Swiss Bank</div>
      </header>
      <main className="main-content">
        <h2>Withdraw Money</h2>
        <form onSubmit={handleSubmit} className="withdrawal-form">
          <div className="form-group">
            <label>Account Number</label>
            <input
              type="text"
              name="accountNumber"
              value={form.accountNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={form.description}
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

export default Withdrawal;
