// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const rootElement = document.getElementById('root'); // Lấy phần tử có id 'root' trong file index.html

// Sử dụng React 18 với createRoot
const root = ReactDOM.createRoot(rootElement);
root.render(
     <React.StrictMode>
          <App />
     </React.StrictMode>
);