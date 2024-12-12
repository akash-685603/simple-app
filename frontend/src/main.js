// src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Import the App.js component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Render the App component */}
  </React.StrictMode>
);
