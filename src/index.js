import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './routes'
import App from './App'
import ErrorBoundary from './utils/ErrorBoundary'

ReactDOM.render(
  <React.StrictMode>
    {/* <ErrorBoundary> */}
    <App>
      <Navigation />
    </App>
    {/* </ErrorBoundary> */}
  </React.StrictMode>,
  document.getElementById('root')
);


