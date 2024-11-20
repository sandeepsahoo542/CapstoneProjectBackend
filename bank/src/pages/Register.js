import React, { useState } from 'react';
import '../styles/Register.css';

const Register = () => {
  const [form, setForm] = useState({
    accountHolderName: '',
    accountType: '',
    username: '',
    phoneNumber: '',
    pass: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="accountHolderName" value={form.accountHolderName} onChange={handleChange} placeholder="Account Holder Name" required />
        <input type="text" name="accountType" value={form.accountType} onChange={handleChange} placeholder="Account Type" required />
        <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Username" required />
        <input type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
        <input type="password" name="pass" value={form.pass} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
