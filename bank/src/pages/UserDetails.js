import React from 'react';
import '../styles/UserDetails.css';

const UserDetails = () => {
  const user = {
    accountHolderName: 'John Doe',
    accountType: 'Savings',
    username: 'john_doe',
    phoneNumber: '123-456-7890',
    email: 'john.doe@example.com',
    address: '123 Main St, Anytown, USA'
  };

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <div className="user-card">
        <div className="user-info">
          <label>Account Holder Name:</label>
          <p>{user.accountHolderName}</p>
        </div>
        <div className="user-info">
          <label>Account Type:</label>
          <p>{user.accountType}</p>
        </div>
        <div className="user-info">
          <label>Username:</label>
          <p>{user.username}</p>
        </div>
        <div className="user-info">
          <label>Phone Number:</label>
          <p>{user.phoneNumber}</p>
        </div>
        <div className="user-info">
          <label>Email:</label>
          <p>{user.email}</p>
        </div>
        <div className="user-info">
          <label>Address:</label>
          <p>{user.address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
