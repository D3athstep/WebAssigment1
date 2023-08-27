import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <script src="https://kit.fontawesome.com/617bc0ea79.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./css/style.css"></link>
    <App />
  </React.StrictMode>
);
reportWebVitals();
