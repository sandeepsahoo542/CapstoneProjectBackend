// src/App.js or src/index.js
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './context/UserContext'; // Import the UserProvider
import App from './App'; // Assuming your main app component is here

ReactDOM.render(
  <UserProvider>
    <StrictMode>
    <App />
    </StrictMode>
  
  </UserProvider>,
  document.getElementById('root')
);
