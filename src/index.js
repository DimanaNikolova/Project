import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GuestPage from './pages/GuestPage/GuestPage';
import Navigation from './routes'

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
  document.getElementById('root')
);


