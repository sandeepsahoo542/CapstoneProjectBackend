import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import MainPage from './pages/MainPage';
import UserDetails from './pages/UserDetails';
import IssueCreditLine from './pages/IssueCreditLine';
import ViewCreditCardDetails from './pages/ViewCreditCardDetails';
import Deposit from './pages/Deposit';
import Withdrawal from './pages/Withdrawal';
import TransactionHistory from './pages/TransactionHistory';
import AboutUs from './pages/AboutUs';
import FAQs from './pages/FAQs';
import './App.css'; // Import global styles

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/issue-credit-line" element={<IssueCreditLine />} />
        <Route path="/credit-card-details" element={<ViewCreditCardDetails />} />
        
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdrawal />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </Router>
  );
};

export default App;
