import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/RobotoCondensed-Bold.ttf';
import './fonts/RobotoCondensed-Regular.ttf';
import './fonts/RobotoCondensed-Italic.ttf';
import './fonts/RobotoCondensed-Light.ttf';
import './fonts/Geologica_Auto-Regular.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
