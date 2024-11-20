import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import '../styles/TransactionHistory.css';

const TransactionHistory = () => {
  const { user } = useContext(UserContext); // Retrieve the user context
  const [transactions, setTransactions] = useState([]); // State to store transaction data
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle error messages

  useEffect(() => {
    const fetchTransactionHistory = async () => {
      // Ensure the user object exists before fetching
      if (user && user.username) {
        try {
          const response = await axios.get(`/api/transactions?username=${user.username}`);
          setTransactions(response.data); // Set the fetched transactions
        } catch (err) {
          setError('Error fetching transaction history. Please try again later.');
          console.error('Error fetching transaction history:', err); // Log error for debugging
        } finally {
          setLoading(false); // Set loading to false after fetching data
        }
      }
    };

    fetchTransactionHistory(); // Trigger fetch when component mounts
  }, [user]); // Re-run effect if `user` context changes

  // Conditional rendering based on the loading and error state
  if (loading) {
    return <div className="loading">Loading transaction history...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{new Date(transaction.date).toLocaleDateString()}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.type}</td>
                <td>{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionHistory;
