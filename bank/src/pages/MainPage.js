import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';

const MainPage = () => {
  const navigate = useNavigate();

  const handleAccountClick = () => {
    navigate('/user-details');
  };

  return (
    <div className="main-container">
      <header className="main-header">
        <div className="logo">Swiss Bank</div>
        <div className="account-button">
          <button onClick={handleAccountClick}>My Account</button>
        </div>
      </header>
      <hr className="divider" />
      <nav className="navbar">
        <ul className="left-nav">
          <li className="dropdown">
            <button className="dropbtn">Credit</button>
            <div className="dropdown-content">
              <Link to="/credit-card-details">Credit Card Details</Link>
              <Link to="/issue-credit-line">Issue a New Credit Line</Link>
              <Link to="/available-credit">Check Available Credit</Link>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropbtn">Deposit/Withdraw</button>
            <div className="dropdown-content">
              <Link to="/deposit">Deposit</Link>
              <Link to="/withdraw">Withdraw</Link>
              <Link to="/transaction-history">Check Transaction History</Link>
            </div>
          </li>
        </ul>
        <ul className="right-nav">
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>
        </ul>
      </nav>
      <main className="content">
        <h2>Welcome to Swiss Bank</h2>
        <p>Your trusted partner for secure and efficient banking services.</p>
        <section className="features-section">
          <div className="feature-box">
            <h3>Online Banking</h3>
            <p>Manage your accounts, transfer funds, and pay bills online.</p>
          </div>
          <div className="feature-box">
            <h3>Investment Services</h3>
            <p>Access a range of investment options to grow your wealth.</p>
          </div>
          <div className="feature-box">
            <h3>Customer Support</h3>
            <p>Get 24/7 support for all your banking needs.</p>
          </div>
        </section>
      </main>
      <footer className="main-footer">
        <div className="footer-links">
          <Link to="/benefits-rewards">Benefits/Rewards</Link>
          <Link to="/fraud-handling">Fraud Handling</Link>
          <Link to="/rules-regulations">Rules & Regulations</Link>
          <Link to="/complaints-feedback">Complaints/Feedback</Link>
        </div>
        <hr className="divider" />
        <p>&copy; 2024 Swiss Bank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;
