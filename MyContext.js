// MyContext.js
import React, { createContext, useContext } from 'react';
import './style.css';
import './index.css';

const MyContext = React.createContext();

export const MyProvider = ({ children }) => {
  const value = useContext(MyContext);
  if (value === null) {
    console.error("Context value is null");
  }
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
  return useContext(MyContext);
};

// App.js
import React from 'react';
import UserDashboard from './UserDashboard';
import { MyProvider } from './MyContext'; // Import your context provider

function App() {
  return (
    <MyProvider>
      <div className="App">
        <User Dashboard />
      </div>
    </MyProvider>
  );
}

export default App;