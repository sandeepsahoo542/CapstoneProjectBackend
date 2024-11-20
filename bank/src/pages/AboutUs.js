import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="header">
        <div className="logo">Swiss Bank</div>
      </header>
      <main className="main-content">
        <h2>About Us</h2>
        <p>
          Welcome to Swiss Bank. We are dedicated to providing our customers with secure and reliable banking services.
        </p>
        <div className="mission-section">
          <h3>Our Mission</h3>
          <p>
            At Swiss Bank, our mission is to deliver exceptional financial solutions to meet the evolving needs of our clients. We strive to foster trust, transparency, and innovation in all our services.
          </p>
        </div>
        <div className="vision-section">
          <h3>Our Vision</h3>
          <p>
            To be the most trusted financial institution, renowned for excellence in customer service and innovative banking solutions.
          </p>
        </div>
        <div className="values-section">
          <h3>Our Values</h3>
          <ul>
            <li>Integrity</li>
            <li>Customer Focus</li>
            <li>Innovation</li>
            <li>Collaboration</li>
            <li>Excellence</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
