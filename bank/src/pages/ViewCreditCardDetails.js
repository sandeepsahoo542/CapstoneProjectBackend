import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import '../styles/ViewCreditCardDetails.css';

const ViewCreditCardDetails = () => {
  const { user } = useContext(UserContext);
  const [cardDetails, setCardDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Adding state to handle errors

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        setLoading(true); // Set loading state to true before starting the fetch
        const response = await axios.get(`/api/credit-card?username=${user.username}`);
        setCardDetails(response.data);
      } catch (err) {
        setError('Error fetching credit card details');
        console.error('Error fetching credit card details:', err);
      } finally {
        setLoading(false); // Ensure loading is false when the fetch finishes
      }
    };

    if (user && user.username) {
      fetchCardDetails();
    }
  }, [user]); // Added 'user' as a dependency to ensure fetch happens when user changes

  // Render loading state, error message, or card details
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!cardDetails) {
    return <div>No credit card details available</div>;
  }

  return (
    <div className="credit-card-details">
      <h2>Credit Card Details</h2>
      <p>Card Number: {cardDetails.cardNumber}</p>
      <p>Cardholder Name: {cardDetails.cardholderName}</p>
      <p>Expiration Date: {cardDetails.expirationDate}</p>
      {/* Render more card details if needed */}
    </div>
  );
};

export default ViewCreditCardDetails;
