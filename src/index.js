import React from 'react';
import ReactDOM from 'react-dom';
import App from './routers/App';
import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
