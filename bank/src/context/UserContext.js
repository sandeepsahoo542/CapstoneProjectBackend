// src/context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the UserContext with a default value (empty object or null)
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Set default user state as null

  // Simulate fetching user from an API or localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user'); // Assuming the user is stored in localStorage
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set user if it exists
    }
  }, []);

  // A function to update the user (for example, after login)
  const updateUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser)); // Store updated user in localStorage
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
